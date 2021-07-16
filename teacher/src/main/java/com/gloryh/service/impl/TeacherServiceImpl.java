package com.gloryh.service.impl;

import com.gloryh.entity.CourseTeacher;
import com.gloryh.entity.Teacher;
import com.gloryh.entity.TeacherDTO;
import com.gloryh.mapper.TeacherMapper;
import com.gloryh.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 教师服务接口实现
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@Service
public class TeacherServiceImpl implements ITeacherService {
    @Autowired
    private TeacherMapper teacherMapper;
    @Value("${default.teacher.password}")
    private String defaultPassword;

    /**
     * 添加教师信息
     *
     * @param teacher   教师信息
     * @param course_id 所授课程id
     * @param class_id  所授班级 id
     */
    @Override
    public void add(Teacher teacher, int course_id, int class_id) {
        teacher.setTeacher_password(defaultPassword);
        teacherMapper.add(teacher);
        CourseTeacher courseTeacher = new CourseTeacher();
        courseTeacher.setCourse_id(course_id);
        courseTeacher.setTeacher_id(teacher.getTeacher_id());
        teacherMapper.addCourseTeacher(courseTeacher);
        teacherMapper.addClassCourseTeacher(class_id, courseTeacher.getId());
    }

    /**
     * 按查询教师信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 教师信息列表
     */
    @Override
    public List<TeacherDTO> findAll(int index, int limit) {
        return teacherMapper.findAll(index, limit);
    }

    /**
     * 查询符合条件的教师数量
     *
     * @return 教师数量
     */
    @Override
    public int count() {
        return teacherMapper.count();
    }

    /**
     * 按条件查询教师信息
     *
     * @param index     起始页码
     * @param limit     每页大小
     * @param course_id 课程编号
     * @param type      关键字类型
     * @param keywords  关键字
     * @return 教师信息
     */
    @Override
    public List<TeacherDTO> findByIndex(int index, int limit, int course_id, String type, String keywords) {
        return teacherMapper.findByIndex(index, limit, course_id, type, keywords);
    }

    /**
     * 获取符合条件的教师总数
     *
     * @param course_id 课程编号
     * @param type      关键字类型
     * @param keywords  关键字
     * @return 教师总数
     */
    @Override
    public int countByIndex(int course_id, String type, String keywords) {
        return teacherMapper.countByIndex(course_id, type, keywords);
    }


}
