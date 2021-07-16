package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Student;
import com.gloryh.entity.StudentVO;
import com.gloryh.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 学生相关操作接扣
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@RestController
public class StudentController {
    @Autowired
    private IStudentService studentService;

    @PostMapping("/add/{username}/{name}/{sex}/{class_id}")
    public JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id) {
        JSONObject jsonObject = new JSONObject();
        try {
            studentService.add(username, name, sex, class_id);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2001);
        }
        return jsonObject;
    }

    @PostMapping("/addBatch")
    public JSONObject addBatch(@RequestBody String list) {
        List<Object> objectList = (List<Object>) JSONObject.parse(list);
        JSONObject jsonObject = new JSONObject();
        try {
            studentService.addBatch(objectList);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            //导入出错
            jsonObject.put("code", 2006);
        }
        return jsonObject;
    }

    @GetMapping("/findAll/{index}/{limit}")
    public JSONObject findAll(@PathVariable int index, @PathVariable int limit) {
        StudentVO studentVO = new StudentVO();
        try {
            //获取学生以及对应的学生和班级
            List<Student> students = studentService.findAll(index, limit);
            //获取学生总数
            int count = studentService.count();
            studentVO.setCode(0);
            studentVO.setMsg("");
            studentVO.setCount(count);
            studentVO.setData(students);
        } catch (Exception e) {
            System.out.println(e);
            studentVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(studentVO);
    }

    @GetMapping("/findByIndex/{index}/{limit}/{class_id}/{type}/{keywords}")
    JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int class_id, @PathVariable String type, @PathVariable String keywords) {
        StudentVO studentVO = new StudentVO();
        try {
            //获取学生以及对应的教师和班级
            List<Student> students = studentService.findByIndex(index, limit, class_id, type, keywords);
            //获取学生总数
            int count = studentService.countByIndex(class_id, type, keywords);
            studentVO.setCode(0);
            studentVO.setMsg("");
            studentVO.setCount(count);
            studentVO.setData(students);
        } catch (Exception e) {
            System.out.println(e);
            studentVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(studentVO);
    }
}
