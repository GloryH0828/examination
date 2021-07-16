package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Admin;
import com.gloryh.entity.Student;
import com.gloryh.entity.Teacher;
import com.gloryh.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 登录控制类
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@RestController
public class AccountController {
    @Autowired
    private IAccountService accountService;

    @PostMapping("/login/{role}/{username}/{password}")
    public JSONObject login(@PathVariable String role, @PathVariable String username, @PathVariable String password) {
        JSONObject jsonObject = new JSONObject();
        if ("teacher".equals(role)) {
            Teacher teacher = accountService.teacherLogin(username, password);
            if (teacher == null) {
                //2001代码，用户名或密码有误
                jsonObject.put("code", 2001);
            } else {
                teacher.teacher_password = null;
                //2000代码，用户存在
                jsonObject.put("code", 2000);
                jsonObject.put("username", teacher.getTeacher_username());
                jsonObject.put("name", teacher.getTeacher_name());
                jsonObject.put("id", teacher.getTeacher_id());
                jsonObject.put("course", teacher.getCourse().getCourse_id());
                jsonObject.put("class", teacher.getClasses().getClass_id());
                jsonObject.put("role", "teacher");
            }
        } else if ("admin".equals(role)) {
            Admin admin = accountService.adminLogin(username, password);
            if (admin == null) {
                //2001代码，用户名或密码有误
                jsonObject.put("code", 2001);
            } else {
                admin.admin_password = null;
                //2000代码，用户存在
                jsonObject.put("code", 2000);
                jsonObject.put("admin", admin);
                jsonObject.put("role", "admin");
            }
        } else if ("student".equals(role)) {
            Student student = accountService.studentLogin(username, password);
            if (student == null) {
                //2001代码，用户名或密码有误
                jsonObject.put("code", 2001);
            } else {
                student.setStudent_password(null);
                //2000代码，用户存在
                jsonObject.put("code", 2000);
                jsonObject.put("studentId", student.getStudent_id());
                jsonObject.put("studentName", student.getStudent_name());
                jsonObject.put("studentUsername", student.getStudent_username());
            }
        }

        return jsonObject;
    }
    @PutMapping("/editPassword/{type}")
    public JSONObject editPassword(@PathVariable String type,  @RequestParam String newPassword,@RequestParam String username,@RequestParam String oldPassword){
        return accountService.editPassword(type,username,oldPassword,newPassword);
    }

}
