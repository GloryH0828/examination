package com.gloryh.mapper;

import com.gloryh.entity.Course;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 持久层接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Mapper
public interface CourseMapper {
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
