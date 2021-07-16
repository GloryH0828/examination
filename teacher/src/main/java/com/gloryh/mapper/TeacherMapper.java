package com.gloryh.mapper;

import com.gloryh.entity.CourseTeacher;
import com.gloryh.entity.Teacher;
import com.gloryh.entity.TeacherDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 持久层接口
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@Mapper
public interface TeacherMapper {
    /**
     * 添加教师信息
     *
     * @param teacher 教师信息
     */
    void add(Teacher teacher);

    /**
     * 根据用户名查询id
     *
     * @param username 用户名
     * @return id
     */
    int findIdByUsername(@Param("username") String username);

    /**
     * 为教师添加所授课程
     *
     * @param courseTeacher 副表
     * @return 主键
     */
    int addCourseTeacher(CourseTeacher courseTeacher);

    /**
     * 为班级添加对应教师和课程信息
     *
     * @param class_id 班级 id
     * @param id       附表 id
     */
    void addClassCourseTeacher(@Param("class_id") int class_id, @Param("c_t_id") Integer id);

    /**
     * 按条件查询教师信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 班级信息列表
     */
    List<TeacherDTO> findAll(@Param("index") int index, @Param("limit") int limit);

    /**
     * 查询教师数量
     *
     * @return 数量
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
    List<TeacherDTO> findByIndex(@Param("index") int index, @Param("limit") int limit, @Param("course_id") int course_id, @Param("type") String type, @Param("keywords") String keywords);

    /**
     * 获取符合条件的教师总数
     *
     * @param course_id 班级编号
     * @param type      关键字类型
     * @param keywords  关键字
     * @return 教师总数
     */
    int countByIndex(@Param("course_id") int course_id, @Param("type") String type, @Param("keywords") String keywords);
}
