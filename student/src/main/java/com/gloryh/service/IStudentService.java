package com.gloryh.service;

import com.gloryh.entity.Student;

import java.util.List;

/**
 * 学生服务接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
public interface IStudentService {

    /**
     * 学生信息添加
     *
     * @param username 用户名
     * @param name     姓名
     * @param sex      性别
     * @param class_id 班级编号
     */
    void add(String username, String name, String sex, int class_id);

    /**
     * 批量添加学生信息
     *
     * @param list 学生信息列表
     */
    void addBatch(List<Object> list);

    /**
     * 按条件查询学生信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 班级信息列表
     */
    List<Student> findAll(int index, int limit);

    /**
     * 获取学生总数
     *
     * @return 学生总数
     */
    int count();

    /**
     * 按条件查询学生信息
     *
     * @param index    起始页码
     * @param limit    每页大小
     * @param class_id 班级编号
     * @param type     关键字类型
     * @param keywords 关键字
     * @return 学生信息
     */
    List<Student> findByIndex(int index, int limit, int class_id, String type, String keywords);

    /**
     * 获取符合条件的学生总数
     *
     * @param class_id 班级编号
     * @param type     关键字类型
     * @param keywords 关键字
     * @return 学生总数
     */
    int countByIndex(int class_id, String type, String keywords);
}
