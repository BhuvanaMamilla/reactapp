package com.example.springbootapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringbootapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootapiApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://educationalinstitute.s3-website-us-east-1.amazonaws.com/") // You can
																											// specify a
																											// domain
																											// instead
																											// of "*"
						.allowedMethods("*")
						.allowedHeaders("*")
						.allowCredentials(false)
						.maxAge(3600);
			}
		};
	}
}
