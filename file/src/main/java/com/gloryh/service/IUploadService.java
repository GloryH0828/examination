package com.gloryh.service;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.CountData;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.List;

/**
 * 文件上传接口
 *
 * @author 黄光辉
 * @since 2020/11/8
 **/
public interface IUploadService {
    /**
     * 图片上传
     *
     * @param img 图片
     * @return 上传结果
     */
    public String upload(MultipartFile img);
    /**
     * 答案文件上传
     *
     * @param multipartFile 文件
     * @return 上传结果
     */
    String uploadAnswer(MultipartFile multipartFile);

    /**
     * 上传考试途中的学生照片
     * @param multipartFile 文件
     * @return 结果
     */
    String uploadImage(MultipartFile multipartFile);

    /**
     * 获取处理后的文件
     * @param detailExport 数据
     * @return 文件
     */
    File detailExport(JSONObject detailExport);

    /**
     * 根据试卷id 导出试卷统计数据excel
     * @param countExport  明细数据
     * @return 文件
     */
    File countExport(List<CountData> countExport);

    /**
     * 备份数据库信息
     * @return  结果
     */
    boolean backup();

    /**
     * 数据库恢复
     * @return 结果
     */
    boolean recover();
}
