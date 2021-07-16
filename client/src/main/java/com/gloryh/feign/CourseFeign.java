package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Repository
@FeignClient(value = "course")
public interface CourseFeign {

    /**
     * 添加课程
     *
     * @param name 课程名
     * @return 添加结果
     */
    @PostMapping("/add/{name}")
    JSONObject add(@PathVariable String name);

    /**
     * 获取课程列表
     *
     * @return 班级列表
     */
    @GetMapping("/getList")
    JSONObject getList();
}
