package com.gloryh.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.*;
import com.gloryh.mapper.AccountMapper;
import com.gloryh.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 服务层接口实现
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@Service
public class AccountServiceImpl implements IAccountService {
    @Autowired
    private AccountMapper accountMapper;

    /**
     * 教师登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Teacher
     */
    @Override
    public Teacher teacherLogin(String username, String password) {
        Teacher teacher = accountMapper.teacherLogin(username, password);
        if (teacher ==null){
            return null;
        }
        CourseTeacher courseTeacher = accountMapper.findCourses(teacher.getTeacher_id());
        int classId = accountMapper.findClass(courseTeacher.getC_t_id());
        Classes classes = new Classes();
        classes.setClass_id(classId);
        Course course = new Course();
        course.setCourse_id(courseTeacher.getCourse_id());
        teacher.setCourse(course);
        teacher.setClasses(classes);
        return teacher;
    }

    /**
     * 管理员登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Admin
     */
    @Override
    public Admin adminLogin(String username, String password) {
        return accountMapper.adminLogin(username, password);
    }

    /**
     * 学生登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Student
     */
    @Override
    public Student studentLogin(String username, String password) {
        return accountMapper.studentLogin(username, password);
    }

    /***
     * 修改教师或学生姓名
     * @param type 类型
     * @param username 用户名
     * @param oldPassword 旧密码
     * @param newPassword 新密码
     * @return 结果
     */
    @Override
    public JSONObject editPassword(String type, String username, String oldPassword, String newPassword) {
        JSONObject jsonObject=new JSONObject();
        try{
            if ("teacher".equals(type)){
                Teacher teacher=teacherLogin(username,oldPassword);
                if (teacher.getTeacher_id()!=null){
                    accountMapper.editTeacherPassword(username,newPassword);
                    jsonObject.put("code",2000);
                }else {
                    jsonObject.put("code",2027);
                    jsonObject.put("msg","旧密码不正确，请重新输入");
                }
            }else if ("student".equals(type)){
                Student student=studentLogin(username,oldPassword);
                if (student.getStudent_id()!=null){
                    accountMapper.editStudentPassword(username,newPassword);
                    jsonObject.put("code",2000);
                }else {
                    jsonObject.put("code",2027);
                    jsonObject.put("msg","旧密码不正确，请重新输入");
                }
            }
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2027);
            jsonObject.put("msg","修改失败，请稍后重试");
        }
        return jsonObject;
    }
}
