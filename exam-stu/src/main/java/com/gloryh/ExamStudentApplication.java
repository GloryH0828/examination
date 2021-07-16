package com.gloryh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * 考试系统 学生端启动类
 *
 * @author 黄光辉
 * @since 2021/3/24
 **/
@SpringBootApplication
@EnableFeignClients
public class ExamStudentApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExamStudentApplication.class, args);
    }
}
