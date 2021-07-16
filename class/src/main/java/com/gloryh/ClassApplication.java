package com.gloryh;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 班级相关微服务
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@SpringBootApplication
@MapperScan("com.gloryh.mapper")
public class ClassApplication {
    public static void main(String[] args) {
        SpringApplication.run(ClassApplication.class, args);
    }
}
