package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/14
 **/
@Data
public class Teacher {
    private Integer teacher_id;
    private String teacher_name;
    private String teacher_username;
    private String teacher_password;
    private String teacher_sex;
    private String teacher_phone;
    private String teacher_email;
    private String teacher_status;
    private Course course;
    private Classes classes;
}
