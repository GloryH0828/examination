package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Data
public class Course {
    private Integer course_id;
    private String course_name;
    private Teacher teacher;
}
