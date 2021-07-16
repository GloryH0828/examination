package com.gloryh.service.impl;

import com.gloryh.entity.Student;
import com.gloryh.mapper.StudentMapper;
import com.gloryh.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 学生服务接口实现类
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Service
public class StudentServiceImpl implements IStudentService {
    @Autowired
    private StudentMapper studentMapper;
    @Value("${default.password}")
    private String default_password;

    /**
     * 学生信息添加
     *
     * @param username 用户名
     * @param name     姓名
     * @param sex      性别
     * @param class_id 班级编号
     */
    @Override
    public void add(String username, String name, String sex, int class_id) {
        studentMapper.add(default_password, username, name, sex, class_id);
    }

    /**
     * 批量添加学生信息
     *
     * @param list 学生信息列表
     */
    @Override
    public void addBatch(List<Object> list) {
        studentMapper.addBatch(list);
    }

    /**
     * 按条件查询学生信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 班级信息列表
     */
    @Override
    public List<Student> findAll(int index, int limit) {
        return studentMapper.findAll(index, limit);
    }

    /**
     * 获取学生总数
     *
     * @return 学生总数
     */
    @Override
    public int count() {
        return studentMapper.count();
    }

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
    @Override
    public List<Student> findByIndex(int index, int limit, int class_id, String type, String keywords) {
        return studentMapper.findByIndex(index, limit, class_id, type, keywords);
    }

    /**
     * 获取符合条件的学生总数
     *
     * @param class_id 班级编号
     * @param type     关键字类型
     * @param keywords 关键字
     * @return 学生总数
     */
    @Override
    public int countByIndex(int class_id, String type, String keywords) {
        return studentMapper.countByIndex(class_id, type, keywords);
    }
}
