package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.TeacherFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 教师相关操作接口
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private TeacherFeign teacherFeign;

    @GetMapping("/add/{username}/{name}/{sex}/{class_id}/{course_id}")
    public JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id, @PathVariable int course_id) {
        return teacherFeign.add(username, name, sex, class_id, course_id);
    }

    @PostMapping("/import")
    public JSONObject addBatch(@RequestBody List<Object> list) {
        System.out.println(JSONObject.toJSONString(list));
        return teacherFeign.addBatch(JSONObject.toJSONString(list));
    }

    @GetMapping("/findAll")
    public JSONObject findAll(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        int index = (page - 1) * limit;
        return teacherFeign.findAll(index, limit);
    }

    @GetMapping("/findByIndex")
    public JSONObject findByIndex(@RequestParam("page") int page, @RequestParam("limit") int limit, @RequestParam int course_id, @RequestParam("type") String type, @RequestParam("index") String keywords) {
        int index = (page - 1) * limit;
        return teacherFeign.findByIndex(index, limit, course_id, type, keywords);
    }

}
