package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Data
public class Student {
    private Integer student_id;
    private String student_name;
    private String student_username;
    private String student_password;
    private String student_sex;
    private String student_phone;
    private String student_email;
    private Classes classes;
}
