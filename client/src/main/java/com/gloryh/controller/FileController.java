package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.FileFeign;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

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

    @PostMapping("/upload")
    private JSONObject upload(@RequestBody(required = false) MultipartFile photo) {
        return fileFeign.upload(photo);
    }

    @GetMapping("/detailExport/{testId}")
    public void detailExport(@PathVariable Integer testId, HttpServletRequest request, HttpServletResponse response) {
        //判断参数是否为null
        if (testId != null) {
            //获取要下载的文件
            File file = fileFeign.detailExport(testId);
            //创建输出流用于下载文件
            OutputStream stream = null;
            //判断文件是否存在
            if (file.exists()) {
                //设置下载需要的属性
                response.setContentType("application/force-download");
                try {
                    response.setHeader("Content-Disposition", "attachment;filename= " + java.net.URLEncoder.encode(file.getName(), "UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                    response.setHeader("Content-Disposition", "attachment;filename=student-grads-list.xls");
                }
                exportUtils(response, file, null);
            }
        }
    }
    @GetMapping("/countExport/{testId}")
    public void countExport(@PathVariable Integer testId, HttpServletRequest request, HttpServletResponse response) {
        //判断参数是否为null
        if (testId != null) {
            //获取要下载的文件
            File file = fileFeign.countExport(testId);
            //创建输出流用于下载文件
            OutputStream stream = null;
            //判断文件是否存在
            if (file.exists()) {
                //设置下载需要的属性
                response.setContentType("application/force-download");
                try {
                    response.setHeader("Content-Disposition", "attachment;filename= " + java.net.URLEncoder.encode(file.getName(), "UTF-8"));
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                    response.setHeader("Content-Disposition", "attachment;filename=grades-count-list.xls");
                }
                exportUtils(response, file, null);
            }
        }
    }

    private void exportUtils(HttpServletResponse response, File file, OutputStream stream) {
        try {
            //对接设置的属性
            stream = response.getOutputStream();
            //文件写入，完成下载
            stream.write(FileUtils.readFileToByteArray(file));
            stream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //关闭输出流
            if (stream != null) {
                try {
                    stream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    @PutMapping("/backup")
    private JSONObject backup(){
        return fileFeign.backup();
    }
    @PutMapping("/recover")
    private JSONObject recover(){
        return fileFeign.recover();
    }
}
