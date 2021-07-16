package com.gloryh.service.impl;

import com.gloryh.entity.Course;
import com.gloryh.mapper.CourseMapper;
import com.gloryh.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 接口方法实现
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Service
public class CourseServiceImpl implements ICourseService {
    @Autowired
    private CourseMapper courseMapper;

    /**
     * 添加课程
     *
     * @param name 课程名
     */
    @Override
    public void add(String name) {
        courseMapper.add(name);
    }

    /**
     * 获取课程列表
     *
     * @return 课程列表
     */
    @Override
    public List<Course> getList() {
        return courseMapper.getList();
    }
}
