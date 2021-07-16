package com.gloryh;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 题库相关操作控制层
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@SpringBootApplication
@MapperScan("com.gloryh.mapper")
public class QuestionApplication {
    public static void main(String[] args) {
        SpringApplication.run(QuestionApplication.class, args);
    }
}
