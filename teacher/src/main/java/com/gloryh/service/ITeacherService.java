package com.gloryh.service;

import com.gloryh.entity.Teacher;
import com.gloryh.entity.TeacherDTO;

import java.util.List;

/**
 * 教师服务接口
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
public interface ITeacherService {

    /**
     * 添加教师信息
     *
     * @param teacher   教师
     * @param course_id 所授课程id
     * @param class_id  所授班级 id
     */
    void add(Teacher teacher, int course_id, int class_id);


    /**
     * 按查询教师信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 教师信息列表
     */
    List<TeacherDTO> findAll(int index, int limit);

    /**
     * 查询符合条件的教师数量
     *
     * @return 教师数量
     */
    int count();

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
    List<TeacherDTO> findByIndex(int index, int limit, int course_id, String type, String keywords);

    /**
     * 获取符合条件的教师总数
     *
     * @param course_id 课程编号
     * @param type      关键字类型
     * @param keywords  关键字
     * @return 教师总数
     */
    int countByIndex(int course_id, String type, String keywords);
}
