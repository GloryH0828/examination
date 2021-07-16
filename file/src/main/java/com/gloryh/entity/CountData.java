package com.gloryh.entity;

import com.alibaba.excel.annotation.ExcelIgnore;
import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/4/2
 **/
@Data
public class CountData {
    @ExcelProperty("题目类型")
    private String problemType;
    @ExcelProperty("题目编号")
    private Integer problemId;
    @ExcelProperty("题目分值")
    private Float problemScore;
    @ExcelProperty("最高分")
    private Float maxScore;
    @ExcelProperty("最低分")
    private Float minScore;
    @ExcelProperty("错误率/失分率")
    private String wrongRate;
    @ExcelProperty("正确率/得分率")
    private String rightRate;
    @ExcelIgnore
    private Float sum;
}