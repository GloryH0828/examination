package com.gloryh.service;

import com.gloryh.entity.Course;

import java.util.List;

/**
 * 服务层接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
public interface ICourseService {


    /**
     * 添加课程
     *
     * @param name 课程名
     */
    void add(String name);

    /**
     * 获取课程列表
     *
     * @return 课程列表
     */
    List<Course> getList();
}
