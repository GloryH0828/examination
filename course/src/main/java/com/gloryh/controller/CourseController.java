package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Course;
import com.gloryh.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 课程相关操作接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@RestController
public class CourseController {
    @Autowired
    private ICourseService courseService;

    @PostMapping("/add/{name}")
    public JSONObject add(@PathVariable String name) {
        JSONObject jsonObject = new JSONObject();
        try {
            courseService.add(name);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            //插入失败 2001
            System.out.println(e);
            jsonObject.put("code", 2001);
        }
        return jsonObject;
    }

    @GetMapping("/getList")
    public JSONObject getList() {
        JSONObject jsonObject = new JSONObject();
        try {
            List<Course> courses = courseService.getList();
            jsonObject.put("list", courses);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            //2004，查询错误
            jsonObject.put("code", 2004);
        }
        return jsonObject;
    }
}
