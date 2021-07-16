package com.gloryh.entity;

import lombok.Data;

import java.util.List;


/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/22
 **/
@Data
public class Test {
    private Integer test_id;
    private Integer test_creater;
    private String test_name;
    private String test_begin_time;
    private String test_end_time;
    private Course course;
    private List<Question> questions;
}


