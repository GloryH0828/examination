package com.gloryh.mapper;

import com.gloryh.entity.Question;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@Mapper
public interface QuestionMapper {

    /**
     * 添加题目信息
     *
     * @param question 题目信息
     */
    void add(Question question);

    /**
     * 查询对应课程的题库
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 查询结果
     */
    List<Question> findAll(@Param("courseId") Integer courseId, @Param("index") Integer index, @Param("limit") Integer limit);

    /**
     * 对应课程题库内题目数量
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 数量
     */
    int count(@Param("courseId") Integer courseId, @Param("index") Integer index, @Param("limit") Integer limit);

    /**
     * 按条件查询对应课程的题库
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @param type     题目类型
     * @param keyword  知识点
     * @return 查询结果
     */
    List<Question> findByIndex(@Param("courseId") Integer courseId, @Param("index") int index, @Param("limit") int limit, @Param("type") int type, @Param("keyword") String keyword);

    /**
     * 符合条件的题目数量
     *
     * @param courseId 课程id
     * @param type     题目类型
     * @param keyword  知识点
     * @return 数量
     */
    int countByIndex(@Param("courseId") Integer courseId, @Param("type") int type, @Param("keyword") String keyword);

    /**
     * 按id查询 问题信息
     *
     * @param problem_id 题目id
     * @return 题目信息
     */
    Question findById(Integer problem_id);

    /**
     * 更新题目信息
     *
     * @param question 题目信息
     */
    void edit(Question question);

    /**
     * 按 id 删除题目
     *
     * @param problem_id 题目id
     */
    void deleteById(Integer problem_id);

    /**
     * 查询各类型题目数量
     *
     * @param problem_type 日暮类型
     * @param courseId     课程id
     * @return 数量
     */
    int countByType(@Param("type") Integer problem_type, @Param("id") Integer courseId);

    /**
     * 查询章节
     *
     * @param courseId 课程id
     * @return 章节列表
     */
    List<String> findChapter(Integer courseId);

    /**
     * 按章节查询各题型数目
     *
     * @param courseId 课程id
     * @param type
     * @param ch
     * @return
     */
    int countByChapter(@Param("courseId") Integer courseId, @Param("type") int type, @Param("ch") String ch);

    /**
     * 查询知识点
     *
     * @param courseId 课程id
     * @return 知识点列表
     */
    List<String> findKnowledge(Integer courseId);

    /**
     * 按知识点查询各题型数目
     *
     * @param courseId
     * @param type
     * @param kn
     * @return
     */
    int countByKnowledge(@Param("courseId") Integer courseId, @Param("type") int type, @Param("kn") String kn);

    /**
     * 按类型查找对应的题型列表
     *
     * @param type
     * @param course_id
     * @return 列表
     */
    List<Question> findByType(@Param("type") int type, @Param("course_id") Integer course_id);

    /**
     * 获取题目评分点
     * @param problemId 题目id
     * @return 结果
     */
    String getPoint(@Param("problemId") Integer problemId);
}
