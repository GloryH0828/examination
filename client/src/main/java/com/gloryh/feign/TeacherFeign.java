package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/11
 **/
@RestController
@FeignClient(value = "teacher")
public interface TeacherFeign {
    /**
     * 添加教师信息
     *
     * @param username  工号
     * @param name      姓名
     * @param sex       性别
     * @param course_id 所授课程id
     * @param class_id  所授班级 id
     * @return 添加结果
     */
    @GetMapping("/add/{username}/{name}/{sex}/{class_id}/{course_id}")
    JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id, @PathVariable int course_id);

    /**
     * 批量添加 学生信息
     *
     * @param list 学生列表
     * @return 添加结果
     */
    @PostMapping("/addBatch")
    JSONObject addBatch(@RequestBody String list);

    /**
     * 获取所有教师信息
     *
     * @param index 页码
     * @param limit 每页大小
     * @return 教师信息
     */
    @GetMapping("/findAll/{index}/{limit}")
    JSONObject findAll(@PathVariable int index, @PathVariable int limit);

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
    @GetMapping("/findByIndex/{index}/{limit}/{course_id}/{type}/{keywords}")
    JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int course_id, @PathVariable String type, @PathVariable String keywords);
}
