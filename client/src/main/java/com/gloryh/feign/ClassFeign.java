package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * 班级业务跳转
 *
 * @author 黄光辉
 * @since 2021/3/6
 **/
@Repository
@FeignClient(value = "class")
public interface ClassFeign {

    /**
     * 添加班级
     *
     * @param name 姓名
     * @return JSONObject
     */
    @PostMapping("/add/{name}")
    JSONObject add(@PathVariable String name);

    /**
     * 获取班级列表
     *
     * @return 班级列表
     */
    @GetMapping("/getList")
    JSONObject getList();

    /**
     * 获取所有班级信息
     *
     * @param index 页码
     * @param limit 每页大小
     * @return 班级信息
     */
    @GetMapping("/findAll/{index}/{limit}")
    JSONObject findAll(@PathVariable int index, @PathVariable int limit);

    /**
     * 根据条件获取班级信息
     *
     * @param index       页码
     * @param limit       每页大小
     * @param class_id    班级 id
     * @param course_name 课程名
     * @return 班级信息
     */
    @GetMapping("/findByIndex/{index}/{limit}/{class_id}/{course_name}")
    JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int class_id, @PathVariable String course_name);
}
