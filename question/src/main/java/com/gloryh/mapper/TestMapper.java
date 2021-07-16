package com.gloryh.mapper;

import com.gloryh.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/22
 **/
@Mapper
public interface TestMapper {
    /**
     * 新建试卷
     *
     * @param test 试卷
     */
    void addTest(Test test);

    /**
     * 往新建试卷里加入题目列表
     *
     * @param test_id   试卷信息
     * @param questions
     */
    void addQuestionListToTest(@Param("test_id") Integer test_id, @Param("questions") List<Question> questions);

    /**
     * 添加改卷教师
     *
     * @param teacherIds 教师id
     * @param testId     试卷ID
     */
    void addTeacherToTest(@Param("teacherIds") List<Integer> teacherIds, @Param("testId") Integer testId);

    /**
     * 获取创建的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    List<Test> findCreatTestByTeacherId(@Param("teacherId") Integer teacherId);

    /**
     * 修改试卷结束时间
     *
     * @param testId 试卷id
     * @param time   延时时间
     */
    void editEndTime(@Param("testId") Integer testId, @Param("time") String time);

    /**
     * 按关键字查询我创建的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    List<Test> findMeCreatByIndex(@Param("index") String index, @Param("teacherId") Integer teacherId);

    /**
     * 按关键字查询待我批改的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    List<Test> findMeCorrectByIndex(@Param("index") String index, @Param("teacherId") Integer teacherId);

    /**
     * 查询在考试范围内的学生列表
     *
     * @param testId 试卷id
     * @return 结果
     */
    List<TestStudent> findStuInTest(@Param("testId") Integer testId);

    /**
     * 查询相关课程的所有学生信息
     *
     * @param courseId 课程id
     * @return 结果
     */
    List<Student> findAllStu(@Param("courseId") Integer courseId);

    /**
     * 往试卷添加考生
     *
     * @param testId     试卷id
     * @param studentIds 考生id
     */
    void addStudentToTest(@Param("studentIds") List<Integer> studentIds, @Param("testId") Integer testId);

    /**
     * 给指定试卷的指定学生延时考试
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @param time      时间
     */
    void addTimeForStudent(@Param("testId") Integer testId, @Param("studentId") Integer studentId, @Param("time") String time);

    /**
     * 更改指定试卷的学生状态
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param status    状态
     * @param ip ip
     */
    void editStudentStatus(@Param("testId") Integer testId, @Param("studentId") Integer studentId, @Param("status") Integer status,@Param("ip") String ip);

    /**
     * 作废某学生的试卷
     *
     * @param testId    试卷id
     * @param studentId 学生id
     */
    void cancelStudentTest(@Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 查询在考试范围内的教师列表
     *
     * @param testId 试卷id
     * @return 结果
     */
    List<TestTeacher> findTeaInTest(@Param("testId") Integer testId);

    /**
     * 查询相关课程的所有教师信息
     *
     * @param courseId 课程id
     * @return 结果
     */
    List<Teacher> findAllTea(@Param("courseId") Integer courseId);

    /**
     * 查询待参加的测试
     *
     * @param studentId 学生id
     * @param index     关键字
     * @return 查询结果
     */
    List<Test> findTestReadyByIndex(@Param("studentId") Integer studentId, @Param("index") String index);

    /**
     * 按id 查询试卷中考生信息
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @return 结果
     */
    TestStudent findStuInTestByStudentId(@Param("studentId") Integer studentId, @Param("testId") Integer testId);

    /**
     * 搜索考试信息，开始考试。
     *
     * @param testId 试卷id
     * @return 结果
     */
    List<Question> findProblemInTest(@Param("testId") Integer testId);

    /**
     * 查询已经保存的答案信息
     * @param testId 试卷id
     * @param studentId 学生id
     * @return 结果
     */
    List<TestQuestion> findAnswer(@Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 添加新的答案信息
     * @param newAnswer 答案信息
     */
    void addNewAnswer(@Param("newAnswer") List<TestQuestion> newAnswer);

    /**
     * 更新旧的答案信息
     * @param oldAnswer 答案信息
     */
    void updateOldAnswer(@Param("oldAnswer") List<TestQuestion> oldAnswer);

    /**
     * 查找旧的答案保存
     * @param testId 试卷id
     * @param problemId 问题id
     * @param studentId 学生 id
     * @return 结果
     */
    TestQuestion getOldAnswer(@Param("testId") Integer testId, @Param("problemId") Integer problemId, @Param("studentId") Integer studentId);

    /**
     * 添加新的答案信息
     * @param testQuestion 答案信息
     */
    void addNewAnswerFile(@Param("testQuestion") TestQuestion testQuestion);

    /**
     * 更新旧的答案
     * @param testQuestion 答案信息
     */
    void updateOldAnswerFile(@Param("testQuestion") TestQuestion testQuestion);

    /**
     * 查询试卷结束时间
     * @param testId 试卷id
     * @return 结果
     */
    Date getTestEndTime(@Param("testId") Integer testId);

    /**
     * 查询试卷结束时间
     * @param testId 试卷id
     * @param studentId 学生 id
     * @return 结果
     */
    Date getStudentEndTime(@Param("testId") Integer testId, @Param("studentId") Integer studentId);
    /**
     * 查找旧的抓拍保存
     * @param testId 试卷id
     * @param studentId 学生 id
     * @return 结果
     */
    String getOldStuImage(@Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 更新新的抓拍文件
     * @param url 文件
     * @param testId 试卷id
     * @param studentId 学生 id
     */
    void updateOldStuImage(@Param("url") String url, @Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 上传抓拍文件
     * @param url 文件
     * @param testId 试卷id
     * @param studentId 学生id
     */
    void addNewStuImage(@Param("url") String url, @Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 查询已保存的答案
     * @param testId 试卷id
     * @param studentId 学生id
     * @param problem_id 题目id
     * @return 结果
     */
    String getSavedAnswer(@Param("testId") Integer testId, @Param("studentId") Integer studentId, @Param("problem_id") Integer problem_id);

    /**
     * 获取我创建的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    List<Test> findCorrectByTeacherId(@Param("teacherId") Integer teacherId);

    /**
     * 查询所有待批改的学生信息
     * @param testId 试卷id
     * @return 结果
     */
    List<Student> correctList(@Param("testId") Integer testId);

    /**
     * 查询当前教师正在批改的试卷
     *
     * @param teacherId 教师id
     * @param testId    试卷id
     * @return 学生id
     */
    Integer getCorrecting(@Param("testId") Integer testId, @Param("teacherId") Integer teacherId);


    /**
     * 修改试卷的批改状态
     * @param studentId 学生id
     * @param testId 教师id
     * @param status 要更改为的状态
     * @param teacherId 教师id
     */
    void updateTestAnswerStatus(@Param("studentId") Integer studentId, @Param("testId") Integer testId, @Param("status") Integer status,@Param("teacherId") Integer teacherId);

    /**
     * 查询对应的答案信息并封装
     * @param studentId 学生id
     * @param testId 试卷id
     * @return 信息
     */
    List<TestAnswerVO> findTestAnswerByStu(@Param("studentId") Integer studentId, @Param("testId") Integer testId);

    /**
     * 给题目进行评分
     * @param testId 试卷id
     * @param studentId 学生id
     * @param problem_id 问题id
     * @param score  得分
     */
    void addScore(@Param("testId") Integer testId, @Param("studentId") Integer studentId, @Param("problem_id") Integer problem_id, @Param("score") Float score);

    /**
     * 获取答案文件
     *
     * @param studentId 学生id
     * @param problemId 题目id
     * @param testId  学生id
     * @return 结果
     */
    String getAnswerFile(@Param("problemId") Integer problemId, @Param("studentId") Integer studentId, @Param("testId") Integer testId);

    /**
     * 查询教师创建的已经结束的考试
     * @param teacherId 教师id
     * @param date 多久之前
     * @param index 关键字
     * @return 结果
     */
    List<Test> getEndTestByCreator(@Param("teacherId") Integer teacherId, @Param("date") Long date,@Param("index") String index);

    /**
     * 查询成绩列表
     * @param testId 试卷id
     * @param type 类型
     * @param index 关键字
     * @return 结果
     */
    List<Grades> getGradesList(@Param("testId") Integer testId, @Param("index") String index, @Param("type") Integer type);

    /**
     * 查询未参加考试的学生
     * @param testId 试卷id
     * @param index 关键字
     * @param type 类型
     * @return 结果
     */
    List<Grades> getNotJoinStu(@Param("testId") Integer testId, @Param("index") String index, @Param("type") Integer type);

    /**
     * 获取对应学生未作答的题目id列表
     * @param testId 试卷id
     * @param studentId 学生id
     * @return 结果
     */
    List<Question> findNoAnswerProblem(@Param("testId") Integer testId, @Param("studentId") Integer studentId);

    /**
     * 获取对应的题目得分
     * @param testId 试卷id
     * @param student_id 学生id
     * @param problem_id 题目id
     * @return 分数
     */
    Integer getScore(@Param("testId") Integer testId, @Param("student_id") Integer student_id, @Param("problem_id") Integer problem_id);

    /**
     * 按照题目id 查询试卷内的得分数据
     * @param problem_id 问题id
     * @param testId 试卷id
     * @return 结果
     */
    CountData getCountDataByQuestionId(@Param("problem_id") Integer problem_id, @Param("testId") Integer testId);

    /**
     * 查询总分
     * @param testId 试卷id
     * @param student_id 学生id
     * @return 结果
     */
    Float countScore(@Param("testId") Integer testId, @Param("student_id") Integer student_id);
}
