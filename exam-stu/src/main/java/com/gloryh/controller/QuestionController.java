package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.QuestionFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/25
 **/
@RestController
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    private QuestionFeign questionFeign;

    @GetMapping("/test/findTestReadyByIndex")
    public JSONObject findTestReadyByIndex(@RequestParam Integer studentId, @RequestParam String index) {
        return questionFeign.findTestReadyByIndex(studentId, index);
    }

    @GetMapping("/test/verifyTest/{studentId}/{testId}")
    public JSONObject verifyTest(@PathVariable Integer studentId, @PathVariable Integer testId,@RequestParam String ip) {
        return questionFeign.verifyTest(studentId, testId,ip);
    }

    @GetMapping("test/join/{testId}/{studentId}")
    public ModelAndView joinTest(@PathVariable Integer testId, @PathVariable Integer studentId) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("test");
        JSONObject jsonObject = questionFeign.joinTest(testId, studentId);
        modelAndView.addObject("list", jsonObject);
        modelAndView.addObject("testId", testId);
        modelAndView.addObject("studentId", studentId);
        System.out.println(jsonObject.toJSONString());
        return modelAndView;
    }
    @PostMapping("/test/submitAnswer/{testId}/{studentId}")
    public JSONObject submitAnswer(@PathVariable Integer testId,@PathVariable Integer studentId,@RequestBody JSONObject jsonObject){
        return questionFeign.submitAnswer(testId,studentId,jsonObject);
    }
    @GetMapping("/test/getCountDown/{testId}/{studentId}")
    public JSONObject getCountDown(@PathVariable Integer testId,@PathVariable Integer studentId){
        return questionFeign.getCountDown(testId,studentId);
    }

}
