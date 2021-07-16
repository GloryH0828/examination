package com.gloryh.entity;

import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/4/2
 **/
@Data
public class CountData {
    private String problemType;
    private Integer problemId;
    private Float problemScore;
    private Float maxScore;
    private Float minScore;
    private String wrongRate;
    private String rightRate;
    private Float sum;
}
