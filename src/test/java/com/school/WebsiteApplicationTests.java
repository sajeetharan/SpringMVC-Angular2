package com.school;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.hamcrest.Matchers.containsString;

import java.util.Arrays;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class WebsiteApplicationTests {

	@LocalServerPort
    int port;

	@Autowired

    WebApplicationContext applicationContext;

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void contextLoads() {
        String[] beanName = applicationContext.getBeanDefinitionNames();
        Arrays.stream(beanName).forEach(System.out::println);
        assertThat(applicationContext).isNotNull();
    }


    @Test
    public void shouldReturnDefaultMessage() throws Exception {
	    /*this.mockMvc.perform(get("/")).andExpect(status().isOk())
                .andDo(print()).andExpect(content().string(containsString("Hello World")));*/
    }

}
