package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@Repository
@FeignClient(value = "question")
public interface QuestionFeign {
    /**
     * 添加新的题目
     *
     * @param jsonObject 题目信息
     * @return 添加结果
     */
    @PostMapping("/add")
    JSONObject add(@RequestBody JSONObject jsonObject);

    /**
     * 批量导入题目
     *
     * @param list   题目列表
     * @param type   题目类型
     * @param course
     * @return 导入结果
     */
    @PostMapping("/import/{type}/{course}")
    JSONObject addBatch(@RequestBody String list, @PathVariable Integer type, @PathVariable Integer course);

    /**
     * 查询对应课程的题库
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 查询结果
     */
    @GetMapping("/findAll/{courseId}/{index}/{limit}")
    JSONObject findAll(@PathVariable Integer courseId, @PathVariable Integer index, @PathVariable Integer limit);

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
    @GetMapping("/findByIndex/{courseId}/{index}/{limit}/{type}/{keyword}")
    JSONObject findByIndex(@PathVariable Integer courseId, @PathVariable int index, @PathVariable int limit, @PathVariable int type, @PathVariable String keyword);

    /**
     * 按id查询 问题信息
     *
     * @param problem_id 题目id
     * @return 题目信息
     */
    @GetMapping("/findById/{problem_id}")
    JSONObject findById(@PathVariable Integer problem_id);

    /**
     * 更新题目信息
     *
     * @param jsonObject 题目信息
     * @return 更新结果
     */
    @PutMapping("/edit")
    JSONObject edit(@RequestBody JSONObject jsonObject);

    /**
     * 按 id 删除题目
     *
     * @param problem_id 题目id
     * @return 删除结果
     */
    @DeleteMapping("/deleteById/{problem_id}")
    JSONObject deleteById(@PathVariable Integer problem_id);

    /**
     * 返回 Echarts 报表的参数
     *
     * @param courseId 课程 id
     * @return 报表参数
     */
    @GetMapping("/echarts/{courseId}")
    JSONObject echarts(@PathVariable Integer courseId);

    /**
     * 随机组卷
     *
     * @param jsonObject
     * @return
     */
    @PostMapping("/makeTest/plan")
    JSONObject makeTestByPlan(@RequestBody JSONObject jsonObject);

    /**
     * 查询相关题目信息用于组卷
     *
     * @param courseId 课程id
     * @return 试题信息
     */
    @GetMapping("/makeTest/getData/{courseId}")
    JSONObject getDataForMakeTest(@PathVariable Integer courseId);

    /**
     * 手动组卷
     *
     * @param jsonObject
     * @return
     */
    @PostMapping("/makeTest/hand")
    JSONObject makeTestByHand(@RequestBody JSONObject jsonObject);

    /**
     * 获取我创建的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    @GetMapping("/test/getMeCreat/{teacherId}")
    JSONObject getMeCreat(@PathVariable Integer teacherId);

    /**
     * 获取待我批改的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    @GetMapping("/test/getMeCorrect/{teacherId}")
    JSONObject getMeCorrect(@PathVariable Integer teacherId);

    /**
     * 修改试卷结束时间
     *
     * @param testId 试卷id
     * @param time   延时时间
     * @return 结果
     */
    @PutMapping("/test/editEndTime/{testId}")
    JSONObject editEndTime(@PathVariable Integer testId, @RequestParam String time);

    /**
     * 按关键字查询我创建的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    @GetMapping("/test/findMeCreatByIndex")
    JSONObject findMeCreatByIndex(@RequestParam String index, @RequestParam Integer teacherId);

    /**
     * 按关键字查询待我批改的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    @GetMapping("/test/findMeCorrectByIndex")
    JSONObject findMeCorrectByIndex(@RequestParam String index, @RequestParam Integer teacherId);

    /**
     * 查询不在考试范围内的学生列表
     *
     * @param courseId 课程id
     * @param testId   试卷id
     * @return 结果
     */
    @GetMapping("/test/findStu/{courseId}/{testId}")
    JSONObject findStu(@PathVariable Integer courseId, @PathVariable Integer testId);

    /**
     * 往试卷添加考生
     *
     * @param testId     试卷id
     * @param jsonObject 考生信息
     * @return 结果
     */
    @PostMapping("/test/addStudentToTest/{testId}")
    JSONObject addStuToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject);

    /**
     * 查询对应试卷的考生信息
     *
     * @param testId 试卷id
     * @return 结果
     */
    @GetMapping("/test/getTestStudent/{testId}")
    JSONObject getTestStudent(@PathVariable Integer testId);

    /**
     * 给指定试卷的指定学生延时考试
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @param time      时间
     * @return 结果
     */
    @PutMapping("/test/addTimeForStudent/{testId}/{studentId}")
    JSONObject addTimeForStudent(@PathVariable Integer testId, @PathVariable Integer studentId, @RequestParam String time);

    /**
     * 更改指定试卷的学生状态
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param status    状态
     * @return 结果
     */
    @PutMapping("/test/editStudentStatus/{testId}/{studentId}/{status}")
    JSONObject editStudentStatus(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer status);

    /**
     * 作废某学生的试卷
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @return 结果
     */
    @DeleteMapping("/test/cancelStudentTest/{testId}/{studentId}")
    JSONObject cancelStudentTest(@PathVariable Integer testId, @PathVariable Integer studentId);

    /**
     * 查询同一课程且不在改卷的教师信息
     *
     * @param courseId 课程id
     * @param testId   试卷id
     * @return 结果
     */
    @GetMapping("/test/findTea/{courseId}/{testId}")
    JSONObject findTea(@PathVariable Integer courseId, @PathVariable Integer testId);

    /**
     * 给试卷添加改卷教师
     *
     * @param testId     试卷id
     * @param jsonObject 教师信息
     * @return 结果
     */
    @PostMapping("/test/addTeacherToTest/{testId}")
    JSONObject addTeaToTest(@PathVariable Integer testId, @RequestBody JSONObject jsonObject);

    /**
     * 查询所有待批改的学生信息
     *
     * @param testId 试卷id
     * @return 结果
     */
    @GetMapping("/test/correctList/{testId}")
    JSONObject correctList(@PathVariable Integer testId);

    /**
     * 获取正在批改的试卷
     *
     * @param teacherId 教师id
     * @param testId    试卷id
     * @return 结果
     */
    @GetMapping("/test/getCorrecting/{teacherId}/{testId}")
    JSONObject getCorrecting(@PathVariable Integer teacherId, @PathVariable Integer testId);

    /**
     * 获取学生试卷并批改
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @param teacherId 教师id
     * @return 结果
     */
    @GetMapping("/test/correct/{studentId}/{testId}/{teacherId}")
    JSONObject correct(@PathVariable Integer studentId, @PathVariable Integer testId, @PathVariable Integer teacherId);

    /**
     * 获取题目评分点
     *
     * @param problemId 题目id
     * @return 结果
     */
    @GetMapping("/getPoint/{problemId}")
    JSONObject getPoint(@PathVariable Integer problemId);

    /**
     * 获取答案文件
     *
     * @param problemId 题目id
     * @param studentId 学生id
     * @param testId    试卷id
     * @return 结果
     */
    @GetMapping("/test/getAnswerFile/{problemId}/{studentId}/{testId}")
    JSONObject getAnswerFile(@PathVariable Integer problemId, @PathVariable Integer studentId, @PathVariable Integer testId);

    /**
     * 保存试卷批改
     *
     * @param jsonObject 试题信息
     * @param testId     试卷id
     * @param studentId  学生id
     * @return 结果
     */
    @PostMapping("/test/saveCorrect/{studentId}/{testId}")
    JSONObject saveCorrect(@PathVariable Integer studentId, @PathVariable Integer testId, @RequestBody JSONObject jsonObject);

    /**
     * 提交试卷批改
     *
     * @param jsonObject 试题信息
     * @param testId     试卷id
     * @param studentId  学生id
     * @param teacherId  教师id
     * @return 结果
     */
    @PostMapping("/test/submitCorrect/{studentId}/{testId}/{teacherId}")
    JSONObject submitCorrect(@PathVariable Integer studentId, @PathVariable Integer testId, @PathVariable Integer teacherId, @RequestBody JSONObject jsonObject);

    /**
     * 查询教师创建的已经结束的考试
     * @param teacherId 教师id
     * @param index  关键字
     * @return 结果
     */
    @GetMapping("/test/getEndTest/{teacherId}")
    JSONObject getEndTest(@PathVariable Integer teacherId,@RequestParam String index);

    /**
     * 获取试卷的成绩列表
     * @param testId 试卷id
     * @param index 关键字
     * @param type 类型
     * @return 结果
     */
    @GetMapping("/test/getGradesList/{testId}")
    JSONObject getGradsList(@PathVariable Integer testId,@RequestParam String index,@RequestParam Integer type);
}
