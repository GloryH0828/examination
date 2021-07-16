package com.gloryh.mapper;

import com.gloryh.entity.Admin;
import com.gloryh.entity.CourseTeacher;
import com.gloryh.entity.Student;
import com.gloryh.entity.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * mapper
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@Mapper
public interface AccountMapper {
    /**
     * 教师登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Teacher
     */
    Teacher teacherLogin(@Param("username") String username, @Param("password") String password);

    /**
     * 教师登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Admin
     */
    Admin adminLogin(@Param("username") String username, @Param("password") String password);

    /**
     * sss
     *
     * @param teacher_id
     * @return
     */
    CourseTeacher findCourses(@Param("teacher_id") Integer teacher_id);

    /**
     * sss
     *
     * @param c_t_id
     * @return
     */
    int findClass(Integer c_t_id);

    /**
     * 学生登录
     *
     * @param username 用户名
     * @param password 密码
     * @return Student
     */
    Student studentLogin(@Param("username") String username, @Param("password") String password);

    /**
     * 修改教师密码
     * @param username 用户名
     * @param newPassword 密码
     */
    void editTeacherPassword(@Param("username") String username, @Param("newPassword") String newPassword);

    /**
     * 修改学生密码
     * @param username 用户名
     * @param newPassword 密码
     */
    void editStudentPassword(@Param("username") String username, @Param("newPassword") String newPassword);
}
