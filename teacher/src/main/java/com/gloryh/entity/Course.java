package com.gloryh.entity;

import lombok.Data;

/**
 * 课程实体类
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Data
public class Course {
    private Integer course_id;
    private String course_name;
    private Teacher teacherDao;
}

