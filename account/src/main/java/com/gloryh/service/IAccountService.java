package com.gloryh.service;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.Admin;
import com.gloryh.entity.Student;
import com.gloryh.entity.Teacher;

/**
 * 服务层
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
public interface IAccountService {

    /**
     * 教师登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Teacher
     */
    Teacher teacherLogin(String username, String password);

    /**
     * 管理员登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Admin
     */
    Admin adminLogin(String username, String password);

    /**
     * 学生登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Student
     */
    Student studentLogin(String username, String password);

    /***
     * 修改教师或学生姓名
     * @param type 类型
     * @param username 用户名
     * @param oldPassword 旧密码
     * @param newPassword 新密码
     * @return 结果
     */
    JSONObject editPassword(String type, String username, String oldPassword, String newPassword);
}
