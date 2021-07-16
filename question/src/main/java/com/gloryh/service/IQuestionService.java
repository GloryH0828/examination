package com.gloryh.service;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.*;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
public interface IQuestionService {
    /**
     * 添加题目
     *
     * @param object 题目信息
     */
    void add(JSONObject object);

    /**
     * 对单选和多选题目导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    void select(List<Object> objectList, Integer type, Integer course);

    /**
     * 对填空和判断题目导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    void fillOrJudge(List<Object> objectList, Integer type, Integer courseId);

    /**
     * 对简答题导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    void subjective(List<Object> objectList, Integer type, Integer courseId);

    /**
     * 查询对应课程的题库
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 查询结果
     */
    List<Question> findAll(Integer courseId, Integer index, Integer limit);

    /**
     * 对应课程题库内题目数量
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 数量
     */
    int count(Integer courseId, Integer index, Integer limit);

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
    List<Question> findByIndex(Integer courseId, int index, int limit, int type, String keyword);

    /**
     * 符合条件的题目数量
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @param type     题目类型
     * @param keyword  知识点
     * @return 数量
     */
    int countByIndex(Integer courseId, int index, int limit, int type, String keyword);

    /**
     * 按id查询 问题信息
     *
     * @param problem_id 题目id
     * @return 题目信息
     */
    JSONObject findById(Integer problem_id);

    /**
     * 更新题目
     *
     * @param jsonObject 题目信息
     */
    void edit(JSONObject jsonObject);

    /**
     * 按 id 删除题目
     *
     * @param problem_id 题目id
     * @return 删除结果
     */
    void deleteById(Integer problem_id);

    /**
     * 查询报表参数
     *
     * @param courseId 课程id
     * @return 查询结果
     */
    JSONObject echarts(Integer courseId);

    /**
     * 随机组卷
     *
     * @param jsonObject
     * @return
     */
    JSONObject makeTestByPlan(JSONObject jsonObject);

    /**
     * 查询题库信息用于组卷
     *
     * @param courseId 课程id
     * @return 信息
     */
    JSONObject getDataForMakeTest(Integer courseId);

    /**
     * 手动组卷组卷
     *
     * @param jsonObject
     * @return
     */
    JSONObject makeTestByHand(JSONObject jsonObject);

    /**
     * 获取我创建的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    List<Test> findCreatTestByTeacherId(Integer teacherId);
    /**
     * 获取待我的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    List<Test> findCorrectTestByTeacherId(Integer teacherId);

    /**
     * 修改试卷结束时间
     *
     * @param testId 试卷id
     * @param time   延时时间
     */
    void editEndTime(Integer testId, String time);

    /**
     * 按关键字查询我创建的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    List<Test> findMeCreatByIndex(String index, Integer teacherId);
    /**
     * 按关键字查询待我批改的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    List<Test> findMeCorrectByIndex(String index, Integer teacherId);

    /**
     * 查询不在考试范围内的学生列表
     *
     * @param courseId 课程id
     * @param testId   试卷id
     * @return 结果
     */
    List<TestData> findStu(Integer courseId, Integer testId);

    /**
     * 往试卷添加考生
     *
     * @param testId     试卷id
     * @param jsonObject 考生信息
     */
    void addStudentToTest(Integer testId, JSONObject jsonObject);

    /**
     * 查询对应试卷的考生信息
     *
     * @param testId 试卷id
     * @return 结果
     */
    List<TestStudent> getTestStudent(Integer testId);

    /**
     * 给指定试卷的指定学生延时考试
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @param time      时间
     * @return 结果
     */
    void addTimeForStudent(Integer testId, Integer studentId, String time);

    /**
     * 更改指定试卷的学生状态
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param status    状态
     */
    void editStudentStatus(Integer testId, Integer studentId, Integer status);

    /**
     * 作废某学生的试卷
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @return 结果
     */
    void cancelStudentTest(Integer testId, Integer studentId);

    /**
     * 查询同一课程且不在改卷的教师信息
     *
     * @param courseId 课程id
     * @param testId   试卷id
     * @return 结果
     */
    List<TestData> findTea(Integer courseId, Integer testId);

    /**
     * 给试卷添加改卷教师
     *
     * @param testId     试卷id
     * @param jsonObject 教师信息
     */
    void addTeacherToTest(Integer testId, JSONObject jsonObject);

    /**
     * 查询待参加的测试
     *
     * @param studentId 学生id
     * @param index     关键字
     * @return 查询结果
     */
    List<Test> findTestReadyByIndex(Integer studentId, String index);

    /**
     * 验证是否可以正常进入考试
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @param ip ip地址
     * @return 结果
     */
    JSONObject verifyTest(Integer studentId, Integer testId,String ip);

    /**
     * 搜索考试信息，开始考试。
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @return 结果
     */
    JSONObject joinTest(Integer testId, Integer studentId);

    /**
     * 保存题目答案
     * @param testId 试卷id
     * @param studentId 学生id
     * @param jsonObject 题目信息
     */
    void submitAnswer(Integer testId, Integer studentId, JSONObject jsonObject);

    /**
     * 上传文件
     * @param testId  试卷id
     * @param studentId  学生id
     * @param problemId  题目id
     * @param url 文件
     */
    void addNewAnswerFile(Integer testId, Integer studentId, Integer problemId, String url);

    /**
     * 获取倒计时结束时间
     * @param testId 试卷id
     * @param studentId 学生id
     * @return 结果
     */
    Date getCountDown(Integer testId, Integer studentId);

    /**
     * 上传文件
     * @param testId  试卷id
     * @param studentId  学生id
     * @param url 文件
     */
    void addStuImage(Integer testId, Integer studentId, String url);

    /**
     * 查询所有待批改的学生信息
     * @param testId 试卷id
     * @return 结果
     */
    List<Student> correctList(Integer testId);

    /**
     * 查询当前教师正在批改的试卷
     * @param teacherId 教师id
     * @param testId 试卷id
     * @return 学生id
     */
    Integer getCorrecting(Integer teacherId, Integer testId);

    /**
     * 查询批改信息
     * @param studentId 学生id
     * @param testId  试卷id
     * @param teacherId 教师id
     * @return 答案信息
     */
    JSONObject correct(Integer studentId, Integer testId,Integer teacherId);
    /**
     * 获取题目评分点
     * @param problemId 题目id
     * @return 结果
     */
    String getPoint(Integer problemId);

    /**
     * 获取答案文件
     * @param problemId 题目id
     * @param studentId 学生id
     * @param testId 试卷id
     * @return 结果
     */
    String getAnswerFile(Integer problemId,Integer studentId,Integer testId);

    /**
     * 保存试卷批改
     * @param jsonObject 试题信息
     * @param testId 试卷id
     * @param studentId 学生id
     */
    void saveCorrect(Integer studentId, Integer testId, JSONObject jsonObject);

    /**
     * 提交试卷批改
     * @param jsonObject 试题信息
     * @param testId 试卷id
     * @param studentId 学生id
     * @param teacherId 教师id
     */
    void submitCorrect(Integer studentId, Integer testId,Integer teacherId, JSONObject jsonObject);

    /**
     * 查询教师创建的已经结束的考试
     * @param teacherId 教师id
     * @param index 关键字
     * @return 结果
     */
    List<Test> getEndTestByCreator(Integer teacherId,String index);

    /**
     * 获取试卷的成绩列表
     * @param testId 试卷id
     * @param index 关键字
     * @param type 类型
     * @return 结果
     */
    List<Grades> getGradesList(Integer testId,String index,Integer type);

    /**
     * 获取导出的数据列表
     * @param testId 试卷id
     * @return 结果
     */
    List<LinkedHashMap<String,String>> detailExport(Integer testId);

    /**
     * 获取相关导出数据
     *
     * @param testId 试卷id
     * @return 数据
     */
    List<CountData> countExport(Integer testId);
}
