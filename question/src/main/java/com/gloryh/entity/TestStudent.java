package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/23
 **/
@Data
public class TestStudent {
    private Integer id;
    private Test test;
    private Student student;
    private Integer student_status;
    private String login_ip;
    private Float student_score;
    private String student_images;
    private Integer is_add_time;
    private Integer is_cancel;
    private String student_end_time;
}
