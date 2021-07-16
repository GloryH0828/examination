package com.gloryh.entity;

import lombok.Data;

import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Data
public class StudentVO {
    private int code;
    private String msg;
    private int count;
    private List<Student> data;
}
