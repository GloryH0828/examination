package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.FileFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/17
 **/
@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    private FileFeign fileFeign;

    @PostMapping("/uploadAnswer/{testId}/{studentId}/{problemId}")
    public JSONObject uploadAnswer(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer problemId, @RequestBody(required = false) MultipartFile file){
        return fileFeign.uploadAnswer(testId,studentId,problemId,file);
    }
    @PostMapping("/uploadImage/{testId}/{studentId}")
    public JSONObject uploadImage(@PathVariable Integer testId, @PathVariable Integer studentId, @RequestBody(required = false) MultipartFile file){
        return fileFeign.uploadImage(testId,studentId,file);
    }
}
