package com.gloryh;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 登录相关微服务
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@SpringBootApplication
@MapperScan("com.gloryh.mapper")
public class AccountApplication {
    public static void main(String[] args) {
        SpringApplication.run(AccountApplication.class, args);
    }
}
