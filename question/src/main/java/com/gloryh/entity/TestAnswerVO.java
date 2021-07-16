package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/31
 **/
@Data
public class TestAnswerVO {
    private Integer problem_id;
    private String problem_answer;
    private String test_answer;
    private Integer answer_is_image;
    private String test_answer_image;
    private String point;
    private Float exam_score;
    private Float test_score;
}
