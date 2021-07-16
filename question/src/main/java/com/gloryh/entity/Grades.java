package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/4/1
 **/
@Data
public class Grades {
    private Integer student_id;
    private String student_name;
    private String student_username;
    private String class_name;
    private Float score;
    private String teacher_name;
    private String teacher_username;
    private Integer test_status;
    private Integer is_cancel;
}
