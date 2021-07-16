package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.ClassFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 班级相关
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@RestController
@RequestMapping("/class")
public class ClassController {

    @Autowired
    private ClassFeign classFeign;

    @PostMapping("/add/{name}")
    public JSONObject add(@PathVariable String name) {
        return classFeign.add(name);
    }

    @GetMapping("/getList")
    public JSONObject getList() {
        return classFeign.getList();
    }

    @GetMapping("/findAll")
    public JSONObject findAll(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        int index = (page - 1) * limit;
        return classFeign.findAll(index, limit);
    }

    @GetMapping("/findByIndex")
    public JSONObject findByIndex(@RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam("class_id") int class_id, @RequestParam("index") String course_name) {
        int index = (page - 1) * limit;
        return classFeign.findByIndex(index, limit, class_id, course_name);
    }
}
