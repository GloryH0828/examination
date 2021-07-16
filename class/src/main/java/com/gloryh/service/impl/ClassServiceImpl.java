package com.gloryh.service.impl;

import com.gloryh.entity.Class;
import com.gloryh.entity.ClassDTO;
import com.gloryh.mapper.ClassMapper;
import com.gloryh.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 服务层实现类
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Service
public class ClassServiceImpl implements IClassService {

    @Autowired
    private ClassMapper classMapper;

    /**
     * 添加班级
     *
     * @param name 姓名
     * @return class_id
     */
    @Override
    public void add(String name) {
        classMapper.add(name);
    }

    /**
     * 获取班级列表
     *
     * @return 班级列表
     */
    @Override
    public List<Class> getList() {
        return classMapper.getList();
    }

    /**
     * 按条件查询班级信息
     *
     * @param index 当前页
     * @param limit 每页大小
     * @return 班级信息列表
     */
    @Override
    public List<ClassDTO> findAll(int index, int limit) {
        return classMapper.findAll(index, limit);
    }

    /**
     * 获取班级总数
     *
     * @return 班级总数
     */
    @Override
    public int count() {
        return classMapper.count();
    }

    /**
     * 根据条件获取班级信息
     *
     * @param index       页码
     * @param limit       每页大小
     * @param class_id    班级 id
     * @param course_name 课程名
     * @return 班级信息
     */
    @Override
    public List<ClassDTO> findByIndex(int index, int limit, int class_id, String course_name) {
        return classMapper.findByIndex(index, limit, class_id, course_name);
    }

    /**
     * 查询符合条件的数目
     *
     * @param class_id    班级 id
     * @param course_name 课程名
     * @return 符合条件的数目
     */
    @Override
    public int countByIndex(int class_id, String course_name) {
        return classMapper.countByIndex(class_id, course_name);
    }
}
