package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/23
 **/
@Data
public class TestTeacher {
    private Integer id;
    private Test test;
    private Teacher teacher;
}
