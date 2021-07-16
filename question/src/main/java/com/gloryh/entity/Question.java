package com.gloryh.entity;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;

/**
 * 题库实体类
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@Data
public class Question {
    private Integer problem_id;
    private String problem_content;
    private String problem_answer;
    private Integer problem_type;
    private Course course;
    private String problem_knowledge_point;
    private String problem_chapter;
    private Integer score;
    private JSONObject contentJson;
}
