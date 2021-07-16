package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.CountData;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/29
 **/
@Repository
@FeignClient(value = "question")
public interface QuestionFeign {
    /**
     * 上传文件
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param problemId 题目id
     * @param url       文件
     * @return 结果
     */
    @PostMapping("/test/addNewAnswerFile/{testId}/{studentId}/{problemId}")
    JSONObject addNewAnswerFile(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer problemId, @RequestParam String url);

    /**
     * 上传文件
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param url       文件
     * @return 结果
     */
    @PostMapping("/test/addStuImage/{testId}/{studentId}")
    JSONObject addStuImage(@PathVariable Integer testId, @PathVariable Integer studentId, @RequestParam String url);

    /**
     * 获取相关导出数据
     *
     * @param testId 试卷id
     * @return 数据
     */
    @PostMapping("/test/detailExport/{testId}")
    JSONObject detailExport(@PathVariable Integer testId);

    /**
     * 获取相关导出数据
     *
     * @param testId 试卷id
     * @return 数据
     */
    @PostMapping("/test/countExport/{testId}")
    List<CountData> countExport(@PathVariable Integer testId);
}
