package com.gloryh.entity;

import lombok.Data;

/**
 * 班级实体类
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Data
public class Classes {
    private Integer class_id;
    private String class_name;
    private Course course;
    private Teacher teacher;
}
