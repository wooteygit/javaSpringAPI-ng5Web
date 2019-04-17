package com.javaspringbootapi;

import com.javaspringbootapi.models.ConfigPropertiesModel;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ConfigPropertiesModel.class)
public class JavaspringbootapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaspringbootapiApplication.class, args);
	}

}
