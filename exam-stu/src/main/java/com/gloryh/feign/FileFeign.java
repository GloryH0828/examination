package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.ws.rs.core.MediaType;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/17
 **/
@Repository
@FeignClient(value = "file")
public interface FileFeign {
    /**
     * 上传文件
     * @param testId  试卷id
     * @param studentId  学生id
     * @param problemId  题目id
     * @param file 文件
     * @return 结果
     */
    @PostMapping(value = "/uploadAnswer/{testId}/{studentId}/{problemId}",consumes = MediaType.MULTIPART_FORM_DATA)
    JSONObject uploadAnswer(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer problemId,  MultipartFile file);


    /**
     * 上传考试途中的学生照片
     * @param testId 试卷id
     * @param studentId 学生id
     * @param file 文件
     * @return 结果
     */
    @PostMapping(value = "/uploadImage/{testId}/{studentId}",consumes = MediaType.MULTIPART_FORM_DATA)
    JSONObject uploadImage(@PathVariable Integer testId,@PathVariable Integer studentId, MultipartFile file);
}
