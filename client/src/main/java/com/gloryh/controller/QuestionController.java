package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.QuestionFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@RestController
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    private QuestionFeign questionFeign;

    @PostMapping("/add")
    public JSONObject add(@RequestBody JSONObject jsonObject) {
        return questionFeign.add(jsonObject);
    }

    @PostMapping("/import/{type}/{course}")
    public JSONObject addBatch(@RequestBody List<Object> list, @PathVariable Integer type, @PathVariable Integer course) {
        System.out.println(list);
        return questionFeign.addBatch(JSONObject.toJSONString(list), type, course);
    }

    @GetMapping("/findAll/{courseId}")
    public JSONObject findAll(@PathVariable Integer courseId, @RequestParam("page") int page, @RequestParam("limit") int limit) {
        int index = (page - 1) * limit;
        return questionFeign.findAll(courseId, index, limit);
    }

    @GetMapping("/findByIndex/{courseId}")
    public JSONObject findByIndex(@PathVariable Integer courseId, @RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam("index") String keyword, @RequestParam("type") int type) {
        int index = (page - 1) * limit;
        return questionFeign.findByIndex(courseId, index, limit, type, keyword);
    }

    @GetMapping("findById/{problem_id}")
    public ModelAndView findById(@PathVariable Integer problem_id) {
        JSONObject jsonObject = questionFeign.findById(problem_id);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("question_edit");
        modelAndView.addObject("problem", jsonObject.get("problem"));
        modelAndView.addObject("content", jsonObject.get("content"));
        return modelAndView;
    }

    @PostMapping("/edit")
    public JSONObject edit(@RequestBody JSONObject jsonObject) {
        return questionFeign.edit(jsonObject);
    }

    @DeleteMapping("deleteById/{problem_id}")
    public JSONObject deleteById(@PathVariable Integer problem_id) {
        return questionFeign.deleteById(problem_id);
    }

    @GetMapping("/echarts")
    public JSONObject echarts(@RequestParam("courseId") Integer courseId) {
        JSONObject jsonObject = questionFeign.echarts(courseId);
        return jsonObject;
    }

    @PostMapping("/makeTest/plan")
    public JSONObject makeTestByPlan(@RequestBody JSONObject jsonObject) {
        return questionFeign.makeTestByPlan(jsonObject);
    }

    @PostMapping("/makeTest/hand")
    public JSONObject makeTestByHand(@RequestBody JSONObject jsonObject) {
        return questionFeign.makeTestByHand(jsonObject);
    }

    @GetMapping("/makeTest/getData/{courseId}")
    public JSONObject getDataForMakeTest(@PathVariable Integer courseId) {
        return questionFeign.getDataForMakeTest(courseId);
    }

    @GetMapping("/test/getMeCreat/{teacherId}")
    public JSONObject getMeCreat(@PathVariable Integer teacherId) {
        return questionFeign.getMeCreat(teacherId);
    }
    @GetMapping("/test/getMeCorrect/{teacherId}")
    public JSONObject getMeCorrect(@PathVariable Integer teacherId) {
        return questionFeign.getMeCorrect(teacherId);
    }

    @PutMapping("/test/editEndTime/{testId}")
    public JSONObject editEndTime(@RequestBody JSONObject jsonObject, @PathVariable Integer testId) {
        return questionFeign.editEndTime(testId, jsonObject.getString("time"));
    }

    @GetMapping("/test/findMeCreatByIndex")
    public JSONObject findMeCreatByIndex(@RequestParam String index, @RequestParam Integer teacherId) {
        return questionFeign.findMeCreatByIndex(index, teacherId);
    }

    @GetMapping("/test/findMeCorrectByIndex")
    public JSONObject findMeCorrectByIndex(@RequestParam String index, @RequestParam Integer teacherId) {
        return questionFeign.findMeCorrectByIndex(index, teacherId);
    }

    @GetMapping("/test/findStu/{courseId}/{testId}")
    public JSONObject findStu(@PathVariable Integer courseId, @PathVariable Integer testId) {
        return questionFeign.findStu(courseId, testId);
    }

    @GetMapping("/test/findTea/{courseId}/{testId}")
    public JSONObject findTea(@PathVariable Integer courseId, @PathVariable Integer testId) {
        return questionFeign.findTea(courseId, testId);
    }

    @PostMapping("/test/addStudentToTest/{testId}")
    public JSONObject addStudentToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject) {
        return questionFeign.addStuToTest(testId, jsonObject);
    }

    @PostMapping("/test/addTeacherToTest/{testId}")
    public JSONObject addTeacherToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject) {
        return questionFeign.addTeaToTest(testId, jsonObject);
    }

    @GetMapping("/test/getTestStudent/{testId}")
    public JSONObject getTestStudent(@PathVariable Integer testId) {
        return questionFeign.getTestStudent(testId);
    }

    @PutMapping("/test/addTimeForStudent/{testId}/{studentId}")
    public JSONObject addTimeForStudent(@PathVariable Integer testId, @PathVariable Integer studentId, @RequestBody JSONObject jsonObject) {
        return questionFeign.addTimeForStudent(testId, studentId, jsonObject.getString("time"));
    }

    @PutMapping("/test/editStudentStatus/{testId}/{studentId}/{status}")
    public JSONObject editStudentStatus(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer status) {
        return questionFeign.editStudentStatus(testId, studentId, status);
    }

    @DeleteMapping("/test/cancelStudentTest/{testId}/{studentId}")
    public JSONObject cancelStudentTest(@PathVariable Integer testId, @PathVariable Integer studentId) {
        return questionFeign.cancelStudentTest(testId, studentId);
    }
    @GetMapping("/test/correctList/{testId}")
    public ModelAndView correctList(@PathVariable Integer testId){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("correct_list");
        JSONObject jsonObject=questionFeign.correctList(testId);
        modelAndView.addObject("list",jsonObject.get("list"));
        return modelAndView;
    }
    @GetMapping("/test/getCorrecting/{teacherId}/{testId}")
    public JSONObject getCorrecting(@PathVariable Integer teacherId,@PathVariable Integer testId){
        return questionFeign.getCorrecting(teacherId,testId);
    }
    @GetMapping("/test/correct/{studentId}/{testId}/{teacherId}")
    public ModelAndView correct(@PathVariable Integer studentId,@PathVariable Integer testId,@PathVariable Integer teacherId){
        ModelAndView modelAndView= new ModelAndView();
        modelAndView.setViewName("correct");
        modelAndView.addObject("studentId",studentId);
        modelAndView.addObject("testId",testId);
        modelAndView.addObject("data",questionFeign.correct(studentId,testId,teacherId).get("data"));
        System.out.println(questionFeign.correct(studentId,testId,teacherId).toJSONString());
        return modelAndView;
    }
    @GetMapping("/getPoint/{problemId}")
    public JSONObject getPoint(@PathVariable Integer problemId){
        return questionFeign.getPoint(problemId);
    }
    @GetMapping("/test/getAnswerFile/{problemId}/{studentId}/{testId}")
    public JSONObject getAnswerFile(@PathVariable Integer problemId,@PathVariable Integer studentId,@PathVariable Integer testId){
        return questionFeign.getAnswerFile(problemId,studentId,testId);
    }
    @PostMapping("/test/saveCorrect/{studentId}/{testId}")
    public JSONObject saveCorrect(@PathVariable Integer studentId,@PathVariable Integer testId, @RequestBody JSONObject jsonObject){
        return questionFeign.saveCorrect(studentId,testId ,jsonObject);
    }
    @PostMapping("/test/submitCorrect/{studentId}/{testId}/{teacherId}")
    public JSONObject submitCorrect(@PathVariable Integer studentId,@PathVariable Integer testId,@PathVariable Integer teacherId, @RequestBody JSONObject jsonObject){
        return questionFeign.submitCorrect(studentId,testId,teacherId ,jsonObject);
    }
    @GetMapping("/test/getEndTest/{teacherId}")
    public JSONObject getEndTest(@PathVariable Integer teacherId,@RequestParam String index){
        return questionFeign.getEndTest(teacherId,index);
    }
    @GetMapping("/test/getGradesList/{testId}")
    public ModelAndView getGradesList(@PathVariable Integer testId){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("grades_list");
        modelAndView.addObject("testId",testId);
        return modelAndView;
    }
    @GetMapping("/test/findGradesByTestId/{testId}")
    public JSONObject findGradesByTestId(@PathVariable Integer testId,@RequestParam String index,@RequestParam Integer type){
        JSONObject jsonObject =new JSONObject();
        jsonObject.put("code",0);
        jsonObject.put("msg","");
        jsonObject.put("data",questionFeign.getGradsList(testId,index,type).get("data"));
        return jsonObject;
    }
}
