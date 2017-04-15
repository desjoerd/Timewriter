using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using DeSjoerd.Timewriter.Web.Swagger;
using Microsoft.AspNetCore.Authorization;

namespace DeSjoerd.Timewriter.Web
{
    public class Startup
    {
        private readonly IConfigurationRoot Configuration;

        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication();
            services.AddAuthorization(a =>
            {
                a.AddPolicy("Authenticated", policy => policy.RequireAuthenticatedUser());
            });

            services.AddMvcCore()
                .AddAuthorization()
                .AddApiExplorer()
                .AddJsonFormatters();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info { Title = "Timewriter API", Version = "v1" });
                c.AddSecurityDefinition("oauth2", new Swashbuckle.AspNetCore.Swagger.OAuth2Scheme
                {
                    Type = "oauth2",
                    Flow = "implicit",
                    AuthorizationUrl = Configuration["Swagger:OAuth2:AuthorizationUrl"],
                });
                // Assign scope requirements to operations based on AuthorizeAttribute
                c.OperationFilter<SecurityRequirementsOperationFilter>();
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                Authority = Configuration["OIDC:Authority"],
                Audience = Configuration["OIDC:Audience"],
                TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters { IssuerValidator = ValidateIssuer },
            });

            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Timewriter V1");
                c.ConfigureOAuth2(Configuration["Swagger:OAuth2:ClientId"], "", "", "", additionalQueryStringParameters: new { resource = Configuration["Swagger:OAuth2:Resource"] });
            });
        }

        private string ValidateIssuer(string issuer, Microsoft.IdentityModel.Tokens.SecurityToken securityToken, Microsoft.IdentityModel.Tokens.TokenValidationParameters validationParameters)
        {
            validationParameters.ValidateIssuer = true;
            return issuer;
        }
    }
}
