package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.StudentFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 学生相关操作
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentFeign studentFeign;

    @PostMapping("/add/{username}/{name}/{sex}/{class_id}")
    public JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id) {
        return studentFeign.add(username, name, sex, class_id);
    }

    @PostMapping("/import")
    public JSONObject addBatch(@RequestBody List<Object> list) {
        return studentFeign.addBatch(JSONObject.toJSONString(list));
    }

    @GetMapping("/findAll")
    public JSONObject findAll(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        int index = (page - 1) * limit;
        return studentFeign.findAll(index, limit);
    }

    @GetMapping("/findByIndex")
    public JSONObject findByIndex(@RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam int class_id, @RequestParam("type") String type, @RequestParam("index") String keywords) {
        int index = (page - 1) * limit;
        return studentFeign.findByIndex(index, limit, class_id, type, keywords);
    }
}
