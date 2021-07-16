package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/29
 **/
@Data
public class TestQuestion {
    private Integer id;
    private Integer student_id;
    private Integer test_id;
    private Integer problem_id;
    private Integer answer_is_image;
    private String test_answer_image;
    private String test_answer;
    private Integer test_status;
    private Integer test_teacher;
}
