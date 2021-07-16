package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.*;
import com.gloryh.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@RestController
public class QuestionController {
    @Autowired
    private IQuestionService questionService;

    @PostMapping("/add")
    public JSONObject add(@RequestBody JSONObject object) {
        JSONObject result = new JSONObject();
        try {
            questionService.add(object);
            result.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            result.put("code", 2001);
        }
        return result;
    }

    @PostMapping("/import/{type}/{course}")
    public JSONObject addBatch(@RequestBody String list, @PathVariable Integer type, @PathVariable Integer course) {
        List<Object> objectList = (List<Object>) JSONObject.parse(list);
        JSONObject jsonObject = new JSONObject();
        try {
            if (type == 1 || type == 2) {
                questionService.select(objectList, type, course);
                jsonObject.put("code", 2000);
            } else if (type == 3 || type == 4) {
                questionService.fillOrJudge(objectList, type, course);
                jsonObject.put("code", 2000);
            } else if (type == 5 || type == 6 || type == 7) {
                questionService.subjective(objectList, type, course);
                jsonObject.put("code", 2000);
            } else {
                jsonObject.put("code", 3001);
                jsonObject.put("mag", "非法操作");
            }
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2008);
        }
        return jsonObject;
    }

    @GetMapping("/findAll/{courseId}/{index}/{limit}")
    JSONObject findAll(@PathVariable Integer courseId, @PathVariable Integer index, @PathVariable Integer limit) {
        QuestionVO questionVO = new QuestionVO();
        try {
            List<Question> questions = questionService.findAll(courseId, index, limit);
            int count = questionService.count(courseId, index, limit);
            questionVO.setCode(0);
            questionVO.setMsg("");
            questionVO.setCount(count);
            questionVO.setData(questions);
        } catch (Exception e) {
            System.out.println(e);
            questionVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(questionVO);
    }

    @GetMapping("/findByIndex/{courseId}/{index}/{limit}/{type}/{keyword}")
    JSONObject findByIndex(@PathVariable Integer courseId, @PathVariable int index, @PathVariable int limit, @PathVariable int type, @PathVariable String keyword) {
        QuestionVO questionVO = new QuestionVO();
        try {
            List<Question> questions = questionService.findByIndex(courseId, index, limit, type, keyword);
            int count = questionService.countByIndex(courseId, index, limit, type, keyword);
            questionVO.setCode(0);
            questionVO.setMsg("");
            questionVO.setCount(count);
            questionVO.setData(questions);
        } catch (Exception e) {
            System.out.println(e);
            questionVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(questionVO);
    }

    @GetMapping("/findById/{problem_id}")
    public JSONObject findById(@PathVariable Integer problem_id) {
        return questionService.findById(problem_id);
    }

    @PutMapping("/edit")
    JSONObject edit(@RequestBody JSONObject jsonObject) {
        JSONObject result = new JSONObject();
        try {
            questionService.edit(jsonObject);
            result.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            result.put("code", 2011);
        }
        return result;
    }

    @DeleteMapping("/deleteById/{problem_id}")
    JSONObject deleteById(@PathVariable Integer problem_id) {
        JSONObject jsonObject = new JSONObject();
        try {
            questionService.deleteById(problem_id);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2012);
        }
        return jsonObject;
    }

    @GetMapping("/echarts/{courseId}")
    JSONObject echarts(@PathVariable Integer courseId) {
        return questionService.echarts(courseId);
    }

    @PostMapping("/makeTest/plan")
    JSONObject makeTestByPlan(@RequestBody JSONObject jsonObject) {
        return questionService.makeTestByPlan(jsonObject);
    }

    @GetMapping("/makeTest/getData/{courseId}")
    JSONObject getDataForMakeTest(@PathVariable Integer courseId) {
        return questionService.getDataForMakeTest(courseId);
    }

    @PostMapping("/makeTest/hand")
    JSONObject makeTestByHand(@RequestBody JSONObject jsonObject) {
        return questionService.makeTestByHand(jsonObject);
    }

    @GetMapping("/test/getMeCreat/{teacherId}")
    JSONObject getMeCreat(@PathVariable Integer teacherId) {
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.findCreatTestByTeacherId(teacherId));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }

    @GetMapping("/test/getMeCorrect/{teacherId}")
    JSONObject getMeCorrect(@PathVariable Integer teacherId) {
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.findCorrectTestByTeacherId(teacherId));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }

    @PutMapping("/test/editEndTime/{testId}")
    JSONObject editEndTime(@PathVariable Integer testId, @RequestParam String time) {
        JSONObject jsonObject = new JSONObject();
        try {
            questionService.editEndTime(testId, time);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2015);
        }
        return jsonObject;
    }

    @GetMapping("/test/findMeCreatByIndex")
    JSONObject findMeCreatByIndex(@RequestParam String index, @RequestParam Integer teacherId) {
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.findMeCreatByIndex(index, teacherId));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }

    @GetMapping("/test/findMeCorrectByIndex")
    JSONObject findMeCorrectByIndex(@RequestParam String index, @RequestParam Integer teacherId) {
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.findMeCorrectByIndex(index, teacherId));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }

    @GetMapping("/test/findStu/{courseId}/{testId}")
    JSONObject findStu(@PathVariable Integer courseId, @PathVariable Integer testId) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("list", questionService.findStu(courseId, testId));
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2016);
        }
        return jsonObject;
    }

    @PostMapping("/test/addStudentToTest/{testId}")
    JSONObject addStuToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject) {
        JSONObject result = new JSONObject();
        try {
            questionService.addStudentToTest(testId, jsonObject);
            result.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            result.put("code", 2016);
        }
        return result;
    }

    @PostMapping("/test/addTeacherToTest/{testId}")
    JSONObject addTeaToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject) {
        JSONObject result = new JSONObject();
        try {
            questionService.addTeacherToTest(testId, jsonObject);
            result.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            result.put("code", 2016);
        }
        return result;
    }

    @GetMapping("/test/getTestStudent/{testId}")
    JSONObject getTestStudent(@PathVariable Integer testId) {
        TestStudentVO testStudentVO = new TestStudentVO();
        try {
            testStudentVO.setCode(0);
            testStudentVO.setMsg("");
            testStudentVO.setData(questionService.getTestStudent(testId));
        } catch (Exception e) {
            System.out.println(e);
            testStudentVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testStudentVO);
    }

    @PutMapping("/test/addTimeForStudent/{testId}/{studentId}")
    JSONObject addTimeForStudent(@PathVariable Integer testId, @PathVariable Integer studentId, @RequestParam String time) {
        JSONObject jsonObject = new JSONObject();
        try {
            questionService.addTimeForStudent(testId, studentId, time);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2017);
        }
        return jsonObject;
    }

    @PutMapping("/test/editStudentStatus/{testId}/{studentId}/{status}")
    JSONObject editStudentStatus(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer status) {
        JSONObject jsonObject = new JSONObject();
        try {
            questionService.editStudentStatus(testId, studentId, status);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2018);
        }
        return jsonObject;
    }

    @DeleteMapping("/test/cancelStudentTest/{testId}/{studentId}")
    JSONObject cancelStudentTest(@PathVariable Integer testId, @PathVariable Integer studentId) {
        JSONObject jsonObject = new JSONObject();
        try {
            questionService.cancelStudentTest(testId, studentId);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2018);
        }
        return jsonObject;
    }

    @GetMapping("/test/findTea/{courseId}/{testId}")
    JSONObject findTea(@PathVariable Integer courseId, @PathVariable Integer testId) {
        // 定义返回类型
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("list", questionService.findTea(courseId, testId));
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2016);
        }
        return jsonObject;
    }

    @GetMapping("/test/findTestReadyByIndex")
    JSONObject findTestReadyByIndex(@RequestParam Integer studentId, @RequestParam String index) {
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.findTestReadyByIndex(studentId, index));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }

    @GetMapping("/test/verifyTest/{studentId}/{testId}")
    JSONObject verifyTest(@PathVariable Integer studentId, @PathVariable Integer testId,@RequestParam String ip) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject = questionService.verifyTest(studentId, testId,ip);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2017);
        }
        return jsonObject;
    }

    @GetMapping("/test/join/{testId}/{studentId}")
    JSONObject joinTest(@PathVariable Integer testId, @PathVariable Integer studentId) {
        return questionService.joinTest(testId, studentId);
    }
    @PostMapping("/test/submitAnswer/{testId}/{studentId}")
    JSONObject submitAnswer(@PathVariable Integer testId,@PathVariable Integer studentId,@RequestBody JSONObject jsonObject){
        JSONObject result=new JSONObject();
        try{
            questionService.submitAnswer(testId,studentId,jsonObject);
            result.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            result.put("code",2019);
        }
        return result;
    }
    @PostMapping("/test/addNewAnswerFile/{testId}/{studentId}/{problemId}")
    JSONObject addNewAnswerFile(@PathVariable Integer testId,@PathVariable Integer studentId,@PathVariable Integer problemId,@RequestParam String url){
        JSONObject jsonObject=new JSONObject();
        try{
            questionService.addNewAnswerFile(testId,studentId,problemId,url);
            jsonObject.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2021);
        }
        return jsonObject;
    }
    @GetMapping("/test/getCountDown/{testId}/{studentId}")
    JSONObject getCountDown(@PathVariable Integer testId,@PathVariable Integer studentId){
        JSONObject jsonObject=new JSONObject();
        try{
            Date endTime=questionService.getCountDown(testId,studentId);
            jsonObject.put("code",2000);
            jsonObject.put("time",endTime);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2022);
        }
        return jsonObject;
    }
    @PostMapping("/test/addStuImage/{testId}/{studentId}")
    JSONObject addStuImage(@PathVariable Integer testId,@PathVariable Integer studentId,@RequestParam String url){
        JSONObject jsonObject=new JSONObject();
        try{
            questionService.addStuImage(testId,studentId,url);
            jsonObject.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2021);
        }
        return jsonObject;
    }
    @GetMapping("/test/correctList/{testId}")
    JSONObject correctList(@PathVariable Integer testId){
        JSONObject jsonObject=new JSONObject();
        try{
            jsonObject.put("list",questionService.correctList(testId));
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("list",null);
        }
        return jsonObject;
    }

    @GetMapping("/test/getCorrecting/{teacherId}/{testId}")
    JSONObject getCorrecting(@PathVariable Integer teacherId,@PathVariable Integer testId){
        JSONObject jsonObject=new JSONObject();
        try{
            Integer studentId=questionService.getCorrecting(teacherId,testId);
            jsonObject.put("code",2000);
            jsonObject.put("studentId",studentId==null?"":studentId);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2023);
        }
        return jsonObject;
    }
    @GetMapping("/test/correct/{studentId}/{testId}/{teacherId}")
    JSONObject correct(@PathVariable Integer studentId,@PathVariable Integer testId,@PathVariable Integer teacherId){
        JSONObject jsonObject=new JSONObject();
        try {
            jsonObject.put("data", questionService.correct(studentId, testId, teacherId));
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("data", "");
        }
        return jsonObject;
    }
    @GetMapping("/getPoint/{problemId}")
    JSONObject getPoint(@PathVariable Integer problemId){
        JSONObject jsonObject=new JSONObject();
        try{
            jsonObject.put("point",questionService.getPoint(problemId).replace("\n","<br/>"));
            jsonObject.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2024);
        }
        return jsonObject;
    }
    @GetMapping("/test/getAnswerFile/{problemId}/{studentId}/{testId}")
    JSONObject getAnswerFile(@PathVariable Integer problemId,@PathVariable Integer studentId,@PathVariable Integer testId){
        JSONObject jsonObject=new JSONObject();
        try{
            jsonObject.put("fileName",questionService.getAnswerFile(problemId,studentId,testId)==null?-1:questionService.getAnswerFile(problemId,studentId,testId));
            jsonObject.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2025);
        }
        return jsonObject;
    }
    @PostMapping("/test/saveCorrect/{studentId}/{testId}")
    JSONObject saveCorrect(@PathVariable Integer studentId,@PathVariable Integer testId,@RequestBody JSONObject jsonObject){
        JSONObject result=new JSONObject();
        try{
            questionService.saveCorrect(studentId,testId,jsonObject);
            result.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            result.put("code",2026);
        }
        return  result;
    }
    @PostMapping("/test/submitCorrect/{studentId}/{testId}/{teacherId}")
    JSONObject submitCorrect(@PathVariable Integer studentId,@PathVariable Integer testId,@PathVariable Integer teacherId,@RequestBody JSONObject jsonObject){
        JSONObject result=new JSONObject();
        try{
            questionService.submitCorrect(studentId,testId,teacherId,jsonObject);
            result.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            result.put("code",2026);
        }
        return  result;
    }
    @GetMapping("/test/getEndTest/{teacherId}")
    JSONObject getEndTest(@PathVariable Integer teacherId,@RequestParam String index){
        TestVO testVO = new TestVO();
        try {
            testVO.setCode(0);
            testVO.setMsg("");
            testVO.setData(questionService.getEndTestByCreator(teacherId,index));
        } catch (Exception e) {
            System.out.println(e);
            testVO.setCode(2014);
        }
        return (JSONObject) JSONObject.toJSON(testVO);
    }
    @GetMapping("/test/getGradesList/{testId}")
    JSONObject getGradsList(@PathVariable Integer testId,@RequestParam String index,@RequestParam Integer type){
        JSONObject jsonObject=new JSONObject();
        try{
            jsonObject.put("data",questionService.getGradesList(testId,index,type));
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("data","");
        }
        return jsonObject;
    }
    @PostMapping("/test/detailExport/{testId}")
    JSONObject detailExport(@PathVariable Integer testId){
        JSONObject jsonObject =new JSONObject();
        try{
            jsonObject.put("list",questionService.detailExport(testId));
            jsonObject.put("code",2000);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2027);
        }
        return jsonObject;
    }
    @PostMapping("/test/countExport/{testId}")
    List<CountData>  countExport(@PathVariable Integer testId){
        List<CountData> list =new ArrayList<>();
        try{
            list=questionService.countExport(testId);
        }catch (Exception e){
            System.out.println(e);
            list=null;
        }
        return list;
    }
}
