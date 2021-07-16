package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/25
 **/
@Repository
@FeignClient(value = "question")
public interface QuestionFeign {
    /**
     * 查询待参加的测试
     *
     * @param studentId 学生id
     * @param index     关键字
     * @return 查询结果
     */
    @GetMapping("/test/findTestReadyByIndex")
    JSONObject findTestReadyByIndex(@RequestParam Integer studentId, @RequestParam String index);

    /**
     * 验证是否可以正常进入考试
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @param ip ip地址
     * @return 结果
     */
    @GetMapping("/test/verifyTest/{studentId}/{testId}")
    JSONObject verifyTest(@PathVariable Integer studentId, @PathVariable Integer testId,@RequestParam String ip);

    /**
     * 搜索考试信息，开始考试。
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @return 结果
     */
    @GetMapping("/test/join/{testId}/{studentId}")
    JSONObject joinTest(@PathVariable Integer testId, @PathVariable Integer studentId);

    /**
     * 保存题目答案
     * @param testId 试卷id
     * @param studentId 学生id
     * @param jsonObject 题目信息
     * @return 结果
     */
    @PostMapping("/test/submitAnswer/{testId}/{studentId}")
    JSONObject submitAnswer(@PathVariable Integer testId,@PathVariable Integer studentId,@RequestBody JSONObject jsonObject);

    /**
     * 获取倒计时结束时间
     * @param testId 试卷id
     * @param studentId 学生id
     * @return 结果
     */
    @GetMapping("/test/getCountDown/{testId}/{studentId}")
    JSONObject getCountDown(@PathVariable Integer testId,@PathVariable Integer studentId);
}
