package com.gloryh.service;

import com.gloryh.entity.Class;
import com.gloryh.entity.ClassDTO;

import java.util.List;

/**
 * 班级服务接口
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
public interface IClassService {
    /**
     * 添加班级
     *
     * @param name 姓名
     */
    void add(String name);


    /**
     * 获取班级列表
     *
     * @return 班级列表
     */
    List<Class> getList();


    /**
     * 按条件查询班级信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 班级信息列表
     */
    List<ClassDTO> findAll(int index, int limit);


    /**
     * 获取班级总数
     *
     * @return 班级总数
     */
    int count();


    /**
     * 根据条件获取班级信息
     *
     * @param index       页码
     * @param limit       每页大小
     * @param class_id    班级 id
     * @param course_name 课程名
     * @return 班级信息
     */
    List<ClassDTO> findByIndex(int index, int limit, int class_id, String course_name);


    /**
     * 查询符合条件的数目
     *
     * @param class_id    班级 id
     * @param course_name 课程名
     * @return 符合条件的数目
     */
    int countByIndex(int class_id, String course_name);
}
