package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.CourseFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@RestController
@RequestMapping("/course")
public class CourseController {

    @Autowired
    private CourseFeign courseFeign;

    @PostMapping("/add/{name}")
    public JSONObject add(@PathVariable String name) {
        return courseFeign.add(name);
    }

    @GetMapping("/getList")
    public JSONObject getList() {
        return courseFeign.getList();
    }
}
