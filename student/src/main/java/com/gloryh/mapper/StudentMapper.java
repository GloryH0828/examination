package com.gloryh.mapper;

import com.gloryh.entity.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 学生相关持久层接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Mapper
public interface StudentMapper {
    /**
     * 学生信息添加
     *
     * @param username 用户名
     * @param name     姓名
     * @param sex      性别
     * @param password 默认密码
     * @param class_id 班级编号
     */
    void add(@Param("password") String password, @Param("username") String username, @Param("name") String name, @Param("sex") String sex, @Param("class_id") int class_id);

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
    List<Student> findAll(@Param("index") int index, @Param("limit") int limit);

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
    List<Student> findByIndex(@Param("index") int index, @Param("limit") int limit, @Param("class_id") int class_id, @Param("type") String type, @Param("keywords") String keywords);

    /**
     * 获取符合条件的学生总数
     *
     * @param class_id 班级编号
     * @param type     关键字类型
     * @param keywords 关键字
     * @return 学生总数
     */
    int countByIndex(@Param("class_id") int class_id, @Param("type") String type, @Param("keywords") String keywords);
}
