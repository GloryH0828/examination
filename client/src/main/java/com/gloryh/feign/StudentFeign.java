package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * 学生API接口
 *
 * @author 黄光辉
 * @since 2021/3/8
 **/
@Repository
@FeignClient(value = "student")
public interface StudentFeign {
    /**
     * 添加学生信息
     *
     * @param username 学号
     * @param name     姓名
     * @param sex      性别
     * @param class_id 班级编号
     * @return 添加结果
     */
    @PostMapping("/add/{username}/{name}/{sex}/{class_id}")
    public JSONObject add(@PathVariable String username, @PathVariable String name, @PathVariable String sex, @PathVariable int class_id);

    /**
     * 批量添加 学生信息
     *
     * @param list 学生列表
     * @return 添加结果
     */
    @PostMapping("/addBatch")
    JSONObject addBatch(@RequestBody String list);

    /**
     * 获取所有学生信息
     *
     * @param index 页码
     * @param limit 每页大小
     * @return 学生信息
     */
    @GetMapping("/findAll/{index}/{limit}")
    JSONObject findAll(@PathVariable int index, @PathVariable int limit);

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
    @GetMapping("/findByIndex/{index}/{limit}/{class_id}/{type}/{keywords}")
    JSONObject findByIndex(@PathVariable int index, @PathVariable int limit, @PathVariable int class_id, @PathVariable String type, @PathVariable String keywords);
}
