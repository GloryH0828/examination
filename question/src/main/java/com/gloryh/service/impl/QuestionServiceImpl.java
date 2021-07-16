package com.gloryh.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.*;
import com.gloryh.mapper.QuestionMapper;
import com.gloryh.mapper.TestMapper;
import com.gloryh.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/16
 **/
@Service
public class QuestionServiceImpl implements IQuestionService {
    @Autowired
    private QuestionMapper questionMapper;
    @Autowired
    private TestMapper testMapper;

    /**
     * 添加题目
     *
     * @param object 题目信息
     */
    @Override
    public void add(JSONObject object) {

        questionMapper.add(questionConvert(object));
    }

    /**
     * 对单选和多选题目导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    @Override
    public void select(List<Object> objectList, Integer type, Integer courseId) {
        for (Object o : objectList) {
            JSONObject object = (JSONObject) o;
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("content", object.getString("题目主干"));
            jsonObject.put("question", object.getString("题目问题"));
            jsonObject.put("isImage", "false");
            jsonObject.put("image", "");
            jsonObject.put("option_a", object.getString("选项A"));
            jsonObject.put("option_b", object.getString("选项B"));
            jsonObject.put("option_c", object.getString("选项C"));
            jsonObject.put("option_d", object.getString("选项D"));
            Question question = new Question();
            question.setProblem_content(jsonObject.toJSONString());
            question.setProblem_answer(object.getString("答案"));
            question.setProblem_type(type);
            Course course = new Course();
            //course.setCourse_id(object.getInteger("course_id"));
            course.setCourse_id(courseId);
            question.setCourse(course);
            String[] point = object.getString("知识点").split("-");
            question.setProblem_knowledge_point(point[1]);
            question.setProblem_chapter(point[0]);
            System.out.println(JSONObject.toJSONString(question));
            questionMapper.add(question);
        }
    }

    /**
     * 对填空和判断题目导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    @Override
    public void fillOrJudge(List<Object> objectList, Integer type, Integer courseId) {
        for (Object o : objectList) {
            JSONObject object = (JSONObject) o;
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("content", object.getString("题目主干"));
            jsonObject.put("question", object.getString("题目问题"));
            jsonObject.put("isImage", "false");
            jsonObject.put("image", "");
            Question question = new Question();
            question.setProblem_content(jsonObject.toJSONString());
            question.setProblem_answer(object.getString("答案"));
            question.setProblem_type(type);
            Course course = new Course();
            //course.setCourse_id(object.getInteger("course_id"));
            course.setCourse_id(courseId);
            question.setCourse(course);
            String[] point = object.getString("知识点").split("-");
            question.setProblem_knowledge_point(point[1]);
            question.setProblem_chapter(point[0]);
            System.out.println(JSONObject.toJSONString(question));
            questionMapper.add(question);
        }
    }

    /**
     * 对简答题导入进行判断
     *
     * @param objectList 实体列表
     * @param type       题目类型
     */
    @Override
    public void subjective(List<Object> objectList, Integer type, Integer courseId) {
        for (Object o : objectList) {
            JSONObject object = (JSONObject) o;
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("content", object.getString("题目主干"));
            jsonObject.put("question", object.getString("题目问题"));
            jsonObject.put("isImage", "false");
            jsonObject.put("image", "");
            jsonObject.put("point", object.getString("评分点"));
            Question question = new Question();
            question.setProblem_content(jsonObject.toJSONString());
            question.setProblem_answer(object.getString("答案"));
            question.setProblem_type(type);
            Course course = new Course();
            //course.setCourse_id(object.getInteger("course_id"));
            course.setCourse_id(courseId);
            question.setCourse(course);
            String[] point = object.getString("知识点").split("-");
            question.setProblem_knowledge_point(point[1]);
            question.setProblem_chapter(point[0]);
            System.out.println(JSONObject.toJSONString(question));
            question.setProblem_answer("对照评分点");
            questionMapper.add(question);
        }
    }

    /**
     * 查询对应课程的题库
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 查询结果
     */
    @Override
    public List<Question> findAll(Integer courseId, Integer index, Integer limit) {
        return questionMapper.findAll(courseId, index, limit);
    }

    /**
     * 对应课程题库内题目数量
     *
     * @param courseId 课程id
     * @param index    起始页
     * @param limit    每页大小
     * @return 数量
     */
    @Override
    public int count(Integer courseId, Integer index, Integer limit) {
        return questionMapper.count(courseId, index, limit);
    }

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
    @Override
    public List<Question> findByIndex(Integer courseId, int index, int limit, int type, String keyword) {
        return questionMapper.findByIndex(courseId, index, limit, type, keyword);
    }

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
    @Override
    public int countByIndex(Integer courseId, int index, int limit, int type, String keyword) {
        return questionMapper.countByIndex(courseId, type, keyword);
    }

    /**
     * 按id查询 问题信息
     *
     * @param problem_id 题目id
     * @return 题目信息
     */
    @Override
    public JSONObject findById(Integer problem_id) {
        Question question = questionMapper.findById(problem_id);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("content", JSONObject.parse(question.getProblem_content()));
        question.setProblem_content(null);
        jsonObject.put("problem", question);
        return jsonObject;
    }

    /**
     * 更新题目
     *
     * @param jsonObject 题目信息
     */
    @Override
    public void edit(JSONObject jsonObject) {
        Question questionNew = questionConvert(jsonObject);
        questionNew.setProblem_id(jsonObject.getInteger("problem_id"));
        Question questionOld = questionMapper.findById(questionNew.getProblem_id());
        JSONObject oldContent = JSON.parseObject(questionOld.getProblem_content());
        JSONObject newContent = JSON.parseObject(questionNew.getProblem_content());
        boolean updateImage = jsonObject.getBoolean("imageUpdate");
        if (!updateImage) {
            newContent.put("image", oldContent.getString("image"));
        }
        questionNew.setProblem_content(newContent.toJSONString());
        questionMapper.edit(questionNew);
    }

    @Override
    public void deleteById(Integer problem_id) {
        questionMapper.deleteById(problem_id);
    }

    /**
     * 查询报表参数
     *
     * @param courseId 课程id
     * @return 查询结果
     */
    @Override
    public JSONObject echarts(Integer courseId) {
        JSONObject jsonObject = new JSONObject();
        JSONObject echartsByType = echartsByType(courseId);
        JSONObject echartsByChapter = echartsByChapter(courseId);
        JSONObject echartsByKnowledge = echartsByKnowledge(courseId);
        jsonObject.put("chapter", echartsByChapter);
        jsonObject.put("knowledge", echartsByKnowledge);
        jsonObject.put("type", echartsByType);
        return jsonObject;
    }

    /**
     * 随机组卷
     *
     * @param jsonObject 试卷信息
     * @return 组卷结果
     */
    @Override
    public JSONObject makeTestByPlan(JSONObject jsonObject) {
        JSONObject result = new JSONObject();
        Integer id = jsonObject.getInteger("course");
        if (!isTrue(jsonObject, id)) {
            result.put("code", "2013");
            result.put("msg", "出题不符合规则，请核对各个题型的数目是否有误");
            return result;
        } else {
            String name = jsonObject.getString("name");
            Integer teacher = jsonObject.getInteger("teacher");
            String beginTime = jsonObject.getString("beginTime");
            String endTime = jsonObject.getString("endTime");
            Test test = new Test();
            test.setTest_creater(teacher);
            test.setTest_begin_time(beginTime);
            test.setTest_end_time(endTime);
            test.setTest_name(name);
            List<Question> list = new ArrayList<>();
            for (int i = 1; i < 8; i++) {
                String[] type = returnType(i);
                List<Question> questions = questionMapper.findByType(i, id);
                int count = jsonObject.getInteger(type[0]);
                int score = jsonObject.getInteger(type[1]);
                int length = questions.size();
                Random random = new Random();
                int[] data = new int[count];
                for (int k = 0; k < count; k++) {
                    int key = 0;
                    int index=0;
                    try{
                         index= random.nextInt(length);
                    }catch (Exception e){
                        index =5;
                    }
                    for (int res = 0; res < k; res++) {
                        if (data[res] == index) {
                            key = 1;
                        }
                    }
                    if (key == 0) {
                        data[k] = index;
                    } else {
                        i = i - 1;
                    }
                }
                for (int j = 0; j < count; j++) {
                    Question question = questions.get(data[j]);
                    question.setScore(score);
                    list.add(question);
                }

            }
            Course course = new Course();
            course.setCourse_id(id);
            test.setCourse(course);
            test.setQuestions(list);
            try {
                testMapper.addTest(test);
                testMapper.addQuestionListToTest(test.getTest_id(), test.getQuestions());
                jsonObject.put("code", 2000);
                jsonObject.put("testId", test.getTest_id());
            } catch (Exception e) {
                System.out.println(e);
                jsonObject.put("code", 2013);
                jsonObject.put("msg", "新建试卷时出错，请稍后重试。");
            }
        }

        return jsonObject;
    }

    /**
     * 查询题库信息用于组卷
     *
     * @param courseId 课程id
     * @return 信息
     */
    @Override
    public JSONObject getDataForMakeTest(Integer courseId) {
        JSONObject jsonObject = new JSONObject();
        try {
            for (int i = 1; i < 8; i++) {
                List<Question> questions = questionMapper.findByType(i, courseId);
                List<TestData> testDataList = new ArrayList<>();
                for (Question question : questions) {
                    TestData testData = new TestData();
                    testData.setValue(question.getProblem_id());
                    testData.setTitle(question.getProblem_chapter() + "-" + question.getProblem_knowledge_point() + "-" + question.getProblem_id());
                    testDataList.add(testData);
                }
                String[] type = returnType(i);
                jsonObject.put(type[0], testDataList);
            }
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2014);
        }


        return jsonObject;
    }

    /**
     * 手动组卷组卷
     *
     * @param jsonObject
     * @return
     */
    @Override
    public JSONObject makeTestByHand(JSONObject jsonObject) {
        JSONObject result = new JSONObject();
        Test test = new Test();
        String name = jsonObject.getString("name");
        Integer teacher = jsonObject.getInteger("teacher");
        String beginTime = jsonObject.getString("beginTime");
        String endTime = jsonObject.getString("endTime");
        Integer courseId = jsonObject.getInteger("course");
        test.setTest_name(name);
        test.setTest_creater(teacher);
        test.setTest_begin_time(beginTime);
        test.setTest_end_time(endTime);
        Course course = new Course();
        course.setCourse_id(courseId);
        test.setCourse(course);
        try {
            List<Question> questions = new ArrayList<>();
            for (int i = 1; i < 8; i++) {
                String[] type = returnType(i);
                List<LinkedHashMap<String, Object>> testDataList = jsonObject.getObject(type[0], ArrayList.class);
                for (LinkedHashMap<String, Object> linkedHashMap : testDataList) {
                    Question question = new Question();
                    question.setProblem_id(Integer.parseInt(linkedHashMap.get("value").toString()));
                    question.setScore(jsonObject.getInteger(type[1]));
                    questions.add(question);
                }
            }
            testMapper.addTest(test);
            testMapper.addQuestionListToTest(test.getTest_id(), questions);
            result.put("code", 2000);
            result.put("testId", test.getTest_id());
        } catch (Exception e) {
            System.out.println(e);
            result.put("code", 2013);
            jsonObject.put("msg", "新建试卷时出错，请稍后重试。");
        }
        return result;
    }

    /**
     * 获取我创建的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    @Override
    public List<Test> findCreatTestByTeacherId(Integer teacherId) {
        return testMapper.findCreatTestByTeacherId(teacherId);
    }

    /**
     * 获取待我批改的试卷
     *
     * @param teacherId 教师id
     * @return 信息
     */
    @Override
    public List<Test> findCorrectTestByTeacherId(Integer teacherId) {
        return testMapper.findCorrectByTeacherId(teacherId);
    }

    /**
     * 修改试卷结束时间
     *
     * @param testId 试卷id
     * @param time   延时时间
     */
    @Override
    public void editEndTime(Integer testId, String time) {
        testMapper.editEndTime(testId, time);
    }

    /**
     * 按关键字查询我创建的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    @Override
    public List<Test> findMeCreatByIndex(String index, Integer teacherId) {
        return testMapper.findMeCreatByIndex(index, teacherId);
    }

    /**
     * 按关键字查询待我批改的试卷
     *
     * @param index     关键字
     * @param teacherId 教师id
     * @return 结果
     */
    @Override
    public List<Test> findMeCorrectByIndex(String index, Integer teacherId) {
        return testMapper.findMeCorrectByIndex(index, teacherId);
    }

    /**
     * 查询不在考试范围内的学生列表
     *
     * @param courseId 课程id
     * @param testId   试卷id
     * @return 结果
     */
    @Override
    public List<TestData> findStu(Integer courseId, Integer testId) {
        List<TestStudent> testStudents = testMapper.findStuInTest(testId);
        List<Student> students = testMapper.findAllStu(courseId);
        for (TestStudent testStudent : testStudents) {
            students.removeIf(student -> student.getStudent_id().equals(testStudent.getStudent().getStudent_id()));
        }
        List<TestData> testDataList = new ArrayList<>();
        for (Student student : students) {
            TestData testData = new TestData();
            testData.setValue(student.getStudent_id());
            testData.setTitle(student.getClasses().getClass_name() + "-" + student.getStudent_name());
            testDataList.add(testData);
        }
        return testDataList;
    }

    /**
     * 往试卷添加考生
     *
     * @param testId     试卷id
     * @param jsonObject 考生信息
     */
    @Override
    public void addStudentToTest(Integer testId, JSONObject jsonObject) {
        ArrayList<LinkedHashMap<String, Object>> studentList = jsonObject.getObject("studentList", ArrayList.class);
        List<Integer> studentIds = new ArrayList<>();
        for (LinkedHashMap<String, Object> linkedHashMap : studentList) {
            studentIds.add(Integer.parseInt(linkedHashMap.get("value").toString()));
        }
        testMapper.addStudentToTest(studentIds, testId);
    }

    /**
     * 给试卷添加改卷教师
     *
     * @param testId     试卷id
     * @param jsonObject 教师信息
     * @return 结果
     */
    @Override
    public void addTeacherToTest(Integer testId, JSONObject jsonObject) {
        ArrayList<LinkedHashMap<String, Object>> teacherList = jsonObject.getObject("teacherList", ArrayList.class);
        List<Integer> teacherIds = new ArrayList<>();
        for (LinkedHashMap<String, Object> linkedHashMap : teacherList) {
            teacherIds.add(Integer.parseInt(linkedHashMap.get("value").toString()));
        }
        testMapper.addTeacherToTest(teacherIds, testId);
    }

    /**
     * 查询待参加的测试
     *
     * @param studentId 学生id
     * @param index     关键字
     * @return 查询结果
     */
    @Override
    public List<Test> findTestReadyByIndex(Integer studentId, String index) {
        return testMapper.findTestReadyByIndex(studentId, index);
    }

    /**
     * 验证是否可以正常进入考试
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @return 结果
     */
    @Override
    public JSONObject verifyTest(Integer studentId, Integer testId, String ip) {
        JSONObject jsonObject = new JSONObject();
        TestStudent testStudent = testMapper.findStuInTestByStudentId(studentId, testId);
        try {
            if ((stringFormatDate(testStudent.getTest().getTest_begin_time())).getTime() > (new Date()).getTime()) {
                jsonObject.put("code", 2018);
                jsonObject.put("msg", "考试未开始");
                return jsonObject;
            }
            if (testStudent.getIs_add_time() == 1 && stringFormatDate(testStudent.getStudent_end_time()).getTime() < (new Date()).getTime()) {
                jsonObject.put("code", 2018);
                jsonObject.put("msg", "考试已结束");
                return jsonObject;
            }
            if (testStudent.getIs_add_time() == 0 && stringFormatDate(testStudent.getTest().getTest_end_time()).getTime() < (new Date()).getTime()) {
                jsonObject.put("code", 2018);
                jsonObject.put("msg", "考试已结束");
                return jsonObject;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        if (testStudent.getIs_cancel() == 1) {
            jsonObject.put("code", 2018);
            jsonObject.put("msg", "您的此次考试成绩已作废，无法参与此次考试");
            return jsonObject;
        }
        if (testStudent.getStudent_status() == 1) {
            jsonObject.put("code", 2018);
            jsonObject.put("msg", "您已经被禁止参加此次考试，请联系老师解除禁用后参加");
            return jsonObject;
        }
        if (testStudent.getLogin_ip() != null) {
            if (!testStudent.getLogin_ip().equals(ip)) {
                testMapper.editStudentStatus(testId, studentId, 1, ip);
            }
            jsonObject.put("code", 2018);
            jsonObject.put("msg", "检测到您的ip发生变化，您已经被禁止参加此次考试，请联系老师解除禁用后参加");
        } else {
            testMapper.editStudentStatus(testId, studentId, 0, ip);
        }
        jsonObject.put("code", 2000);
        return jsonObject;
    }

    /**
     * 搜索考试信息，开始考试。
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @return 结果
     */
    @Override
    public JSONObject joinTest(Integer testId, Integer studentId) {
        JSONObject jsonObject = new JSONObject();
        //搜索试卷内各题型题目信息
        List<Question> allQuestions = testMapper.findProblemInTest(testId);
        for (int i = 1; i < 8; i++) {
            List<Question> questions = new ArrayList<>();
            for (Question question : allQuestions) {

                if (question.getProblem_type() == i) {
                    question.setContentJson(JSONObject.parseObject(question.getProblem_content()));
                    question.setProblem_content(null);
                    String answer = testMapper.getSavedAnswer(testId, studentId, question.getProblem_id()) == null ? "" : testMapper.getSavedAnswer(testId, studentId, question.getProblem_id());
                    question.setProblem_answer(answer);
                    questions.add(question);
                }
            }
            jsonObject.put(returnType(i)[0] + "Count", questions.size());
            jsonObject.put(returnType(i)[0], questions);
        }
        return jsonObject;
    }

    /**
     * 保存题目答案
     *
     * @param testId     试卷id
     * @param studentId  学生id
     * @param jsonObject 题目信息
     */
    @Override
    public void submitAnswer(Integer testId, Integer studentId, JSONObject jsonObject) {
        ArrayList<LinkedHashMap<String, String>> list = jsonObject.getObject("list", ArrayList.class);
        List<TestQuestion> testQuestions = testMapper.findAnswer(testId, studentId);
        List<TestQuestion> newAnswer = new ArrayList<>();
        List<TestQuestion> oldAnswer = new ArrayList<>();
        for (LinkedHashMap<String, String> q : list) {
            int index = 0;
            for (TestQuestion t : testQuestions) {
                if (Integer.parseInt(q.get("questionId")) == t.getProblem_id()) {
                    index = 1;
                    break;
                }
            }
            TestQuestion testQuestion = new TestQuestion();
            testQuestion.setTest_id(testId);
            testQuestion.setStudent_id(studentId);
            testQuestion.setProblem_id(Integer.parseInt(q.get("questionId")));
            testQuestion.setTest_answer(q.get("answer"));
            if (index == 1) {
                oldAnswer.add(testQuestion);
            } else {
                newAnswer.add(testQuestion);
            }
        }
        System.out.println(newAnswer);
        System.out.println(oldAnswer);
        if (newAnswer.size() != 0) {
            testMapper.addNewAnswer(newAnswer);
        }
        if (oldAnswer.size() != 0) {
            testMapper.updateOldAnswer(oldAnswer);
        }
    }

    /**
     * 上传文件
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param problemId 题目id
     * @param url       文件
     */
    @Override
    public void addNewAnswerFile(Integer testId, Integer studentId, Integer problemId, String url) {
        TestQuestion testQuestion = new TestQuestion();
        testQuestion.setTest_id(testId);
        testQuestion.setAnswer_is_image(1);
        testQuestion.setTest_answer_image(url);
        testQuestion.setProblem_id(problemId);
        testQuestion.setStudent_id(studentId);
        TestQuestion old = testMapper.getOldAnswer(testId, problemId, studentId);
        if (old != null) {
            testMapper.updateOldAnswerFile(testQuestion);
        } else {
            testMapper.addNewAnswerFile(testQuestion);
        }
    }

    /**
     * 获取倒计时结束时间
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @return 结果
     */
    @Override
    public Date getCountDown(Integer testId, Integer studentId) {
        Date testEndTime = testMapper.getTestEndTime(testId);
        Date studentEndTime = testMapper.getStudentEndTime(testId, studentId);
        if(studentEndTime ==null){
            return testEndTime;
        }
        return testEndTime.getTime() > studentEndTime.getTime() ? testEndTime : studentEndTime;
    }

    /**
     * 上传抓拍文件
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param url       文件
     */
    @Override
    public void addStuImage(Integer testId, Integer studentId, String url) {
        String old = testMapper.getOldStuImage(testId, studentId);
        if (old != null) {
            testMapper.updateOldStuImage(url, testId, studentId);
        } else {
            testMapper.addNewStuImage(url, testId, studentId);
        }
    }

    /**
     * 查询所有待批改的学生信息
     *
     * @param testId 试卷id
     * @return 结果
     */
    @Override
    public List<Student> correctList(Integer testId) {
        return testMapper.correctList(testId);
    }

    /**
     * 查询当前教师正在批改的试卷
     *
     * @param teacherId 教师id
     * @param testId    试卷id
     * @return 学生id
     */
    @Override
    public Integer getCorrecting(Integer teacherId, Integer testId) {
        return testMapper.getCorrecting(testId, teacherId);
    }

    /**
     * 查询批改信息
     *
     * @param studentId 学生id
     * @param testId    试卷id
     * @return 答案信息
     */
    @Override
    public JSONObject correct(Integer studentId, Integer testId, Integer teacherId) {
        JSONObject jsonObject = new JSONObject();
        //查询未作答的题目
        List<Question> questions = testMapper.findNoAnswerProblem(testId, studentId);
        //查找到有未作答的，添加空答案到数据库
        if (questions.size() != 0) {
            List<TestQuestion> testQuestions = new ArrayList<>();
            for (Question question : questions) {
                TestQuestion testQuestion = new TestQuestion();
                testQuestion.setTest_id(testId);
                testQuestion.setStudent_id(studentId);
                testQuestion.setProblem_id(question.getProblem_id());
                if (question.getProblem_type() < 5) {
                    testQuestion.setTest_answer("");
                    testQuestions.add(testQuestion);
                } else {
                    testQuestion.setAnswer_is_image(1);
                    testQuestion.setTest_answer_image("");
                    testMapper.addNewAnswerFile(testQuestion);
                }
            }
            if (testQuestions.size() != 0) {
                testMapper.addNewAnswer(testQuestions);
            }
        }
        //将试卷状态改为批改状态
        testMapper.updateTestAnswerStatus(studentId, testId, 1, teacherId);
        //查找试卷相关所有题目信息并封装为想要的对象
        List<TestAnswerVO> oldTestAnswerVOS = testMapper.findTestAnswerByStu(studentId, testId);
        List<TestAnswerVO> newAnswer = new ArrayList<>();
        for (TestAnswerVO testAnswerVO : oldTestAnswerVOS) {
            if (testAnswerVO.getAnswer_is_image() == 0) {
                if (testAnswerVO.getTest_answer().equals(testAnswerVO.getProblem_answer())) {
                    testAnswerVO.setTest_score(testAnswerVO.getExam_score());
                    testMapper.addScore(testId, studentId, testAnswerVO.getProblem_id(), testAnswerVO.getExam_score());
                } else {
                    testAnswerVO.setTest_score(0.0F);
                    testMapper.addScore(testId, studentId, testAnswerVO.getProblem_id(), 0.0F);
                }
            }
            newAnswer.add(testAnswerVO);
        }
        jsonObject.put("list", newAnswer);
        System.out.println(jsonObject);
        return jsonObject;
    }

    /**
     * 获取题目评分点
     *
     * @param problemId 题目id
     * @return 结果
     */
    @Override
    public String getPoint(Integer problemId) {
        String point = questionMapper.getPoint(problemId);
        return JSONObject.parseObject(point).getString("point");
    }

    /**
     * 获取答案文件
     *
     * @param problemId 题目id
     * @param studentId 学生id
     * @param testId    试卷id
     * @return 结果
     */
    @Override
    public String getAnswerFile(Integer problemId, Integer studentId, Integer testId) {
        return testMapper.getAnswerFile(problemId, studentId, testId);
    }

    /**
     * 保存试卷批改
     *
     * @param studentId  学生id
     * @param testId     试卷id
     * @param jsonObject 试题信息
     */
    @Override
    public void saveCorrect(Integer studentId, Integer testId, JSONObject jsonObject) {
        ArrayList<LinkedHashMap<String, String>> list = jsonObject.getObject("list", ArrayList.class);
        for (LinkedHashMap<String, String> hashMap : list) {
            testMapper.addScore(testId, studentId, Integer.parseInt(hashMap.get("id")), Float.parseFloat(hashMap.get("score")));
        }
    }

    /**
     * 提交试卷批改
     *
     * @param studentId  学生id
     * @param testId     试卷id
     * @param jsonObject 试题信息
     * @param teacherId  教师 id
     */
    @Override
    public void submitCorrect(Integer studentId, Integer testId, Integer teacherId, JSONObject jsonObject) {
        if (jsonObject.getObject("list", ArrayList.class).size() != 0) {
            saveCorrect(studentId, testId, jsonObject);
        }
        testMapper.updateTestAnswerStatus(studentId, testId, 2, teacherId);
    }

    /**
     * 查询教师创建的已经结束的考试
     *
     * @param teacherId 教师id
     * @param index     关键字
     * @return 结果
     */
    @Override
    public List<Test> getEndTestByCreator(Integer teacherId, String index) {
        Date date = new Date();
        System.out.println(date.getTime());
        return testMapper.getEndTestByCreator(teacherId, date.getTime() / 1000, index);
    }

    /**
     * 获取试卷的成绩列表
     *
     * @param testId 试卷id
     * @param index  关键字
     * @param type   类型
     * @return 结果
     */
    @Override
    public List<Grades> getGradesList(Integer testId, String index, Integer type) {

        List<Grades> list = testMapper.getGradesList(testId, index, type);

        List<Grades> list1 = testMapper.getNotJoinStu(testId, index, type);

        List<Grades> result=new ArrayList<>();
        if (list.get(0) == null) {
            list.clear();
        }else{
            for (Grades grades: list) {
                Float score= testMapper.countScore(testId,grades.getStudent_id());
                grades.setScore(score == null?0.0F:score);
                result.add(grades);
            }
        }
        for (Grades grades : list1) {
            grades.setScore(0.0F);
            grades.setTest_status(3);
            result.add(grades);
        }
        return result;
    }

    /**
     * 获取导出的数据列表
     *
     * @param testId 试卷id
     * @return 结果
     */
    @Override
    public List<LinkedHashMap<String, String>> detailExport(Integer testId) {
        List<LinkedHashMap<String, String>> list = new ArrayList<>();
        //获取题目列表
        List<Question> questions = testMapper.findProblemInTest(testId);
        //获取考生列表
        List<Grades> students = getGradesList(testId, null,0 );
        //获取每位学生每道题目的得分，以及学生的考试参与情况
        for (Grades grades : students) {
            LinkedHashMap<String, String> hashMap = new LinkedHashMap<>();
            hashMap.put("学生编号", grades.getStudent_id().toString());
            hashMap.put("学生姓名", grades.getStudent_name());
            hashMap.put("学生学号", grades.getStudent_username());
            hashMap.put("所在班级", grades.getClass_name());
            for (Question question : questions) {
                Integer score=testMapper.getScore(testId,grades.getStudent_id(), question.getProblem_id());
                if (score ==null){
                    score=0;
                }
                hashMap.put(getType().get(question.getProblem_type()) + "-" + question.getProblem_id() + "-得分",
                         score.toString());
            }

            hashMap.put("考试总分",grades.getScore().toString());
            String index="";
            switch (grades.getTest_status()) {
                case 0:
                    index = "未批改";
                    break;
                case 1:
                    index = "批改中";
                    break;
                case 2:
                    index = "已批改";
                    break;
                case 3:
                    index = "未参加";
                    break;
                default:
                    index ="";
                    break;
            }
            if (grades.getIs_cancel() == 1) {
                index = "已作废";
            }
            hashMap.put("试卷状态",index);
            list.add(hashMap);
        }
        return list;
    }

    /**
     * 获取相关导出数据
     *
     * @param testId 试卷id
     * @return 数据
     */
    @Override
    public List<CountData> countExport(Integer testId) {
        List<CountData> list = new ArrayList<>();
        //获取题目列表
        List<Question> questions = testMapper.findProblemInTest(testId);
        //获取考生数量
        Integer studentNum = getGradesList(testId, null,0 ).size();
        //百分比转换
        NumberFormat nf = NumberFormat.getPercentInstance();
        nf.setMinimumFractionDigits(2); // 设置两位小数位
        for (Question question: questions) {
            CountData countData=testMapper.getCountDataByQuestionId(question.getProblem_id(),testId);
            countData.setProblemId(question.getProblem_id());
            countData.setProblemType(getType().get(question.getProblem_type()));
            //得分转换百分比
            Float right=countData.getSum()/(studentNum*countData.getProblemScore());
            countData.setRightRate(nf.format(right));
            //失分转换百分比
            countData.setWrongRate(nf.format(1-right));
            list.add(countData);
        }
        return list;
    }

    /**
     * 查询对应试卷的考生信息
     *
     * @param testId 试卷id
     * @return 结果
     */
    @Override
    public List<TestStudent> getTestStudent(Integer testId) {
        return testMapper.findStuInTest(testId);
    }

    /**
     * 给指定试卷的指定学生延时考试
     *
     * @param testId    试卷id
     * @param studentId 学生 id
     * @param time      时间
     * @return 结果
     */
    @Override
    public void addTimeForStudent(Integer testId, Integer studentId, String time) {
        testMapper.addTimeForStudent(testId, studentId, time);
    }

    /**
     * 更改指定试卷的学生状态
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @param status    状态
     */
    @Override
    public void editStudentStatus(Integer testId, Integer studentId, Integer status) {
        String ip = status == 1 ? null : "";
        testMapper.editStudentStatus(testId, studentId, status, ip);
    }

    /**
     * 作废某学生的试卷
     *
     * @param testId    试卷id
     * @param studentId 学生id
     * @return 结果
     */
    @Override
    public void cancelStudentTest(Integer testId, Integer studentId) {
        testMapper.cancelStudentTest(testId, studentId);
    }

    @Override
    public List<TestData> findTea(Integer courseId, Integer testId) {
        //先查询试卷的教师信息
        List<TestTeacher> testTeachers = testMapper.findTeaInTest(testId);
        //所有教师信息
        List<Teacher> teachers = testMapper.findAllTea(courseId);
        for (TestTeacher testTeacher : testTeachers) {
            teachers.removeIf(teacher -> teacher.getTeacher_id().equals(testTeacher.getTeacher().getTeacher_id()));
        }
        List<TestData> testDataList = new ArrayList<>();
        for (Teacher teacher : teachers) {
            TestData testData = new TestData();
            testData.setValue(teacher.getTeacher_id());
            testData.setTitle(teacher.getTeacher_name());
            testDataList.add(testData);
        }
        return testDataList;
    }

    private boolean isTrue(JSONObject jsonObject, Integer id) {
        for (int i = 1; i < 8; i++) {
            String[] type = returnType(i);
            List<Question> questions = questionMapper.findByType(i, id);
            int count = jsonObject.getInteger(type[0]);
            int length = questions.size();
            if (count > length) {
                return false;
            }
        }
        return true;
    }

    private JSONObject echartsByKnowledge(Integer courseId) {
        List<String> knowledge = questionMapper.findKnowledge(courseId);
        Map<Integer, String> type = getType();
        JSONObject dataList = new JSONObject();
        for (int i = 1; i <= type.size(); i++) {
            int[] data = new int[knowledge.size()];
            int index = 0;
            for (String kn : knowledge) {
                data[index] = questionMapper.countByKnowledge(courseId, i, kn);

                index++;
            }
            dataList.put("" + i, data);
        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("yAxis", knowledge);
        jsonObject.put("data", dataList);
        return jsonObject;
    }

    private JSONObject echartsByChapter(Integer courseId) {
        List<String> chapter = questionMapper.findChapter(courseId);
        Map<Integer, String> type = getType();
        JSONObject dataList = new JSONObject();
        for (int i = 1; i <= type.size(); i++) {
            int[] data = new int[chapter.size()];
            int index = 0;
            for (String ch : chapter) {
                data[index] = questionMapper.countByChapter(courseId, i, ch);
                index++;
            }
            dataList.put("" + i, data);
        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("yAxis", chapter);
        jsonObject.put("data", dataList);
        return jsonObject;
    }


    private JSONObject echartsByType(Integer courseId) {
        Map<Integer, String> type = getType();
        List<Map<String, String>> list = new ArrayList<>();
        for (int i = 1; i <= type.size(); i++) {
            Map<String, String> data = new HashMap<>();
            data.put("name", type.get(i));
            data.put("value", questionMapper.countByType(i, courseId) + "");
            list.add(data);
        }
        System.out.println(list);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("list", list);
        return jsonObject;
    }

    public Question questionConvert(JSONObject object) {
        Question question = new Question();
        JSONObject jsonObject = new JSONObject();
        question.setProblem_type(object.getInteger("type"));
        jsonObject.put("content", object.getString("content"));
        jsonObject.put("question", object.getString("question"));
        jsonObject.put("isImage", object.getString("is_image"));
        jsonObject.put("image", object.getString("image"));
        Course course = new Course();
        //course.setCourse_id(object.getInteger("course_id"));
        course.setCourse_id(object.getInteger("course"));
        question.setCourse(course);
        String[] point = object.getString("knowledge-point").split("-");
        question.setProblem_knowledge_point(point[1]);
        question.setProblem_chapter(point[0]);
        switch (question.getProblem_type()) {
            case 1:
                jsonObject.put("option_a", object.getString("select-a"));
                jsonObject.put("option_b", object.getString("select-b"));
                jsonObject.put("option_c", object.getString("select-c"));
                jsonObject.put("option_d", object.getString("select-d"));
                question.setProblem_answer(object.getString("single-answer"));
                break;
            case 2:
                jsonObject.put("option_a", object.getString("select-a"));
                jsonObject.put("option_b", object.getString("select-b"));
                jsonObject.put("option_c", object.getString("select-c"));
                jsonObject.put("option_d", object.getString("select-d"));
                String answer = "";
                if (object.get("multipleAnswer[A]") != null) {
                    answer = answer + object.get("multipleAnswer[A]");
                }
                if (object.get("multipleAnswer[B]") != null) {
                    if (answer.length() > 0) {
                        answer = answer + "|" + object.get("multipleAnswer[B]");
                    } else {
                        answer = answer + object.get("multipleAnswer[B]");
                    }
                }
                if (object.get("multipleAnswer[C]") != null) {
                    if (answer.length() > 0) {
                        answer = answer + "|" + object.get("multipleAnswer[C]");
                    } else {
                        answer = answer + object.get("multipleAnswer[C]");
                    }
                }
                if (object.get("multipleAnswer[D]") != null) {
                    if (answer.length() > 0) {
                        answer = answer + "|" + object.get("multipleAnswer[D]");
                    } else {
                        answer = answer + object.get("multipleAnswer[D]");
                    }
                }
                question.setProblem_answer(answer);
                break;
            case 3:
                question.setProblem_answer(object.getString("fill-answer"));
                break;
            case 4:
                question.setProblem_answer(object.getString("judge-answer"));
                break;
            default:
                question.setProblem_answer("对照评分点");
                jsonObject.put("point", object.getString("point"));
                break;
        }
        question.setProblem_content(jsonObject.toJSONString());
        return question;
    }

    public Map<Integer, String> getType() {
        Map<Integer, String> type = new HashMap<>();
        type.put(1, "单选题");
        type.put(2, "多选题");
        type.put(3, "填空题");
        type.put(4, "判断题");
        type.put(5, "简答题");
        type.put(6, "计算题");
        type.put(7, "应用题");
        return type;
    }

    public String[] returnType(Integer type) {
        switch (type) {
            case 1:
                return new String[]{"single", "singleScore"};
            case 2:
                return new String[]{"multiple", "multipleScore"};
            case 3:
                return new String[]{"fill", "fillScore"};
            case 4:
                return new String[]{"judge", "judgeScore"};
            case 5:
                return new String[]{"subjectiveOne", "subjectiveOneScore"};
            case 6:
                return new String[]{"subjectiveTwo", "subjectiveTwoScore"};
            default:
                return new String[]{"subjectiveThree", "subjectiveThreeScore"};
        }
    }

    public Date stringFormatDate(String dateString) throws Exception {

        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dateString);
    }
}
