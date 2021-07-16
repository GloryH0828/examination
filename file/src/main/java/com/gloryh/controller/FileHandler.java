package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.QuestionFeign;
import com.gloryh.service.IUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.ws.rs.core.MediaType;
import java.io.File;
import java.util.List;

/**
 * 图片上传
 *
 * @author 黄光辉
 * @since 2020/11/8
 **/
@RestController
public class FileHandler {
    @Autowired
    private IUploadService uploadService;
    @Autowired
    private QuestionFeign questionFeign;

    @PostMapping("/upload")
    public JSONObject upload(@RequestPart("photo") MultipartFile multipartFile) {
        JSONObject jsonObject = new JSONObject();
        try {
            String url = uploadService.upload(multipartFile);
            jsonObject.put("src", url);
            jsonObject.put("code", 2000);
        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2001);
        }

        return jsonObject;
    }

    @PostMapping("/uploadAnswer/{testId}/{studentId}/{problemId}")
    public JSONObject uploadAnswer(@PathVariable Integer testId, @PathVariable Integer studentId, @PathVariable Integer problemId, @RequestPart("file") MultipartFile multipartFile) {
        JSONObject jsonObject = new JSONObject();
        try {
            String url = uploadService.uploadAnswer(multipartFile);
            JSONObject result=questionFeign.addNewAnswerFile(testId,studentId, problemId,url);
            if(result.getInteger("code")==2000){
                jsonObject.put("code", 2000);
            }else {
                jsonObject.put("code", 2020);
            }

        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2020);
        }
        return jsonObject;
    }
    @PostMapping(value = "/uploadImage/{testId}/{studentId}",consumes = MediaType.MULTIPART_FORM_DATA)
    JSONObject uploadImage(@PathVariable Integer testId,@PathVariable Integer studentId,@RequestPart("file") MultipartFile multipartFile){
        JSONObject jsonObject = new JSONObject();
        try {
            String url = uploadService.uploadImage(multipartFile);
            JSONObject result=questionFeign.addStuImage(testId,studentId,url);
            if(result.getInteger("code")==2000){
                jsonObject.put("code", 2000);
            }else {
                jsonObject.put("code", 2020);
            }

        } catch (Exception e) {
            System.out.println(e);
            jsonObject.put("code", 2020);
        }
        return jsonObject;
    }
    @PostMapping("/detailExport/{testId}")
    File detailExport(@PathVariable Integer testId){
        File file=new File("成绩详细列表.xls");
        try{
            file=uploadService.detailExport(questionFeign.detailExport(testId));
        }catch (Exception e){
            System.out.println(e);
        }
        return file;
    }
    @PostMapping("/countExport/{testId}")
    File countExport(@PathVariable Integer testId){
        File file =new File("试卷统计明细.xls");
        try{
            file=uploadService.countExport(questionFeign.countExport(testId));
        }catch (Exception e){
            System.out.println(e);
        }
        return file;
    }
    @PutMapping("/backup")
    JSONObject backup(){
        JSONObject jsonObject =new JSONObject();
        try{
            if(uploadService.backup()){
                jsonObject.put("code",2000);
            }else {
                jsonObject.put("code",2025);
            }
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2025);
        }
        return jsonObject;
    }
    @PutMapping("/recover")
    JSONObject recover(){
        JSONObject jsonObject =new JSONObject();
        try{
            if(uploadService.recover()){
                jsonObject.put("code",2000);
            }else {
                jsonObject.put("code",2026);
            }
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("code",2026);
        }
        return jsonObject;
    }
}
