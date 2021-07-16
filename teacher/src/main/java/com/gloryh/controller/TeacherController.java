package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Teacher;
import com.gloryh.entity.TeacherDTO;
import com.gloryh.entity.TeacherVO;
import com.gloryh.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 教师相关操作控制类
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@RestController
public class TeacherController {
    @Autowired
    private ITeacherService teacherService;

    @GetMapping("/add/{username}/{name}/{sex}/{class_id}/{course_id}")
    public JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id, @PathVariable int course_id) {
        JSONObject jsonObject = new JSONObject();
        try {
            Teacher teacher = new Teacher();
            teacher.setTeacher_username(username);
            teacher.setTeacher_name(name);
            teacher.setTeacher_sex(sex);
            teacherService.add(teacher, course_id, class_id);
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

        for (Object object : objectList) {
            JSONObject jsonTeacher = (JSONObject) object;
            Teacher teacher = new Teacher();
            teacher.setTeacher_name(jsonTeacher.getString("姓名"));
            teacher.setTeacher_username(jsonTeacher.getString("工号"));
            teacher.setTeacher_sex(jsonTeacher.getString("性别"));
            teacher.setTeacher_phone(jsonTeacher.getString("手机号"));
            teacher.setTeacher_email(jsonTeacher.getString("邮箱"));
            int course_id = Integer.parseInt(jsonTeacher.getString("所授课程编号"));
            int class_id = Integer.parseInt(jsonTeacher.getString("所授班级编号"));
            try {
                teacherService.add(teacher, course_id, class_id);
                jsonObject.put("code", 2000);
            } catch (Exception e) {
                System.out.println(e);
                //导入出错
                jsonObject.put("code", 2006);
                jsonObject.put("msg", "出错教师工号为：" + teacher.getTeacher_username());
                return jsonObject;
            }
        }

        return jsonObject;
    }

    @GetMapping("/findAll/{index}/{limit}")
    JSONObject findAll(@PathVariable int index, @PathVariable int limit) {
        TeacherVO teacherVO = new TeacherVO();
        try {
            //获取教师以及对应的教师和班级
            List<TeacherDTO> teachers = teacherService.findAll(index, limit);
            //获取教师总数
            int count = teacherService.count();
            teacherVO.setCode(0);
            teacherVO.setMsg("");
            teacherVO.setCount(count);
            teacherVO.setData(teachers);
        } catch (Exception e) {
            System.out.println(e);
            teacherVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(teacherVO);
    }

    @GetMapping("/findByIndex/{index}/{limit}/{course_id}/{type}/{keywords}")
    JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int course_id, @PathVariable String type, @PathVariable String keywords) {
        TeacherVO teacherVO = new TeacherVO();
        try {
            //获取学生以及对应的教师和班级
            List<TeacherDTO> teachers = teacherService.findByIndex(index, limit, course_id, type, keywords);
            //获取学生总数
            int count = teacherService.countByIndex(course_id, type, keywords);
            teacherVO.setCode(0);
            teacherVO.setMsg("");
            teacherVO.setCount(count);
            teacherVO.setData(teachers);
        } catch (Exception e) {
            System.out.println(e);
            teacherVO.setCode(2005);
        }
        return (JSONObject) JSONObject.toJSON(teacherVO);
    }

}
