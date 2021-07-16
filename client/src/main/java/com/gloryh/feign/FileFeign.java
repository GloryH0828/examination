package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.multipart.MultipartFile;

import javax.ws.rs.core.MediaType;
import java.io.File;

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
     * 上传照片
     *
     * @param photo 照片
     * @return 结果
     */
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA)
    JSONObject upload(MultipartFile photo);

    /**
     * 根据试卷id 导出试卷详细数据excel
     * @param testId 试卷id
     * @return 文件
     */
    @PostMapping("/detailExport/{testId}")
    File detailExport(@PathVariable Integer testId);

    /**
     * 根据试卷id 导出试卷统计数据excel
     * @param testId 试卷id
     * @return 文件
     */
    @PostMapping("/countExport/{testId}")
    File countExport(@PathVariable Integer testId);

    /**
     * 题库备份
     * @return 备份结果
     */
    @PutMapping("/backup")
    JSONObject backup();
    /**
     * 题库恢复
     * @return 恢复结果
     */
    @PutMapping("/recover")
    JSONObject recover();
}
