package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Class;
import com.gloryh.entity.ClassDTO;
import com.gloryh.entity.ClassVO;
import com.gloryh.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author 黄光辉
 * @since 2021/3/6
 **/
@RestController
public class ClassController {

    @Autowired
    private IClassService classService;

    @PostMapping("/add/{name}")
    public JSONObject add(@PathVariable String name) {
        JSONObject jsonObject = new JSONObject();
        try {
            classService.add(name);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            //出现异常,2002
            System.out.println(e);
            jsonObject.put("code", 2002);
        }
        return jsonObject;
    }

    @GetMapping("/getList")
    public JSONObject getList() {
        JSONObject jsonObject = new JSONObject();
        try {
            List<Class> classes = classService.getList();
            jsonObject.put("list", classes);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            //2004，查询错误
            jsonObject.put("code", 2004);
        }
        return jsonObject;
    }

    @GetMapping("/findAll/{index}/{limit}")
    public JSONObject findAll(@PathVariable int index, @PathVariable int limit) {
        ClassVO classVO = new ClassVO();
        try {
            //获取班级以及对应的教师和班级
            List<ClassDTO> classes = classService.findAll(index, limit);
            //获取班级总数
            int count = classService.count();
            classVO.setCode(0);
            classVO.setData(classes);
            classVO.setCount(count);
            classVO.setMsg("");
        } catch (Exception e) {
            System.out.println(e);
            classVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(classVO);
    }

    @GetMapping("/findByIndex/{index}/{limit}/{class_id}/{course_name}")
    public JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int class_id, @PathVariable String course_name) {
        ClassVO classVO = new ClassVO();
        try {
            //获取班级以及对应的教师和班级
            List<ClassDTO> classes = classService.findByIndex(index, limit, class_id, course_name);
            //获取班级总数
            int count = classService.countByIndex(class_id, course_name);
            classVO.setCode(0);
            classVO.setData(classes);
            classVO.setCount(count);
            classVO.setMsg("");
        } catch (Exception e) {
            System.out.println(e);
            classVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(classVO);
    }
}
