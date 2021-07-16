package com.gloryh.entity;

import lombok.Data;

/**
 * 教师实体类
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@Data
public class Teacher {
    public Integer teacher_id;
    public String teacher_name;
    public String teacher_username;
    public String teacher_password;
    public String teacher_sex;
    public String teacher_phone;
    public String teacher_email;
    public String teacher_status;
    private Course course;
    private Classes classes;
}
