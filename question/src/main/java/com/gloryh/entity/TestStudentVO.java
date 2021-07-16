package com.gloryh.entity;

import lombok.Data;

import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/18
 **/
@Data
public class TestStudentVO {
    private int code;
    private String msg;
    private int count;
    private List<TestStudent> data;
}
