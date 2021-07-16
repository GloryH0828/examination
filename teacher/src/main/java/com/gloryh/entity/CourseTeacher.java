package com.gloryh.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseTeacher {
    private Integer id;
    private Integer teacher_id;
    private Integer course_id;
}
