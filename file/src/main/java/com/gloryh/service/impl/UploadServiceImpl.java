package com.gloryh.service.impl;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.support.ExcelTypeEnum;
import com.alibaba.fastjson.JSONObject;
import com.gloryh.entity.CountData;
import com.gloryh.service.IUploadService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * 文件上传实现类
 *
 * @author 黄光辉
 * @since 2020/11/8
 **/
@Service
public class UploadServiceImpl implements IUploadService {


    @Value("${home.picture}")
    private String defaultUrl;

    @Value("${database.hostIP}")
    private String hostIP;
    @Value("${database.hostPort}")
    private String hostPort;
    @Value("${database.name}")
    private String databaseName;
    @Value("${database.username}")
    private String username;
    @Value("${database.password}")
    private String password;
    @Value("${database.fileName}")
    private String fileName;
    @Value("${database.url}")
    private String url;

    /**
     * 图片上传
     *
     * @param img 图片
     * @return 上传结果
     */
    @Override
    public String upload(MultipartFile img) {
        String fileName = UUID.randomUUID().toString() + "-" + Calendar.getInstance().getTimeInMillis() + ".jpg";
        if (img.getSize() > 0) {
            File file = new File(defaultUrl + "\\" + fileName);
            try {
                img.transferTo(file);
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }

        }
        return fileName;
    }

    /**
     * 答案文件上传
     *
     * @param multipartFile 文件
     * @return 上传结果
     */
    @Override
    public String uploadAnswer(MultipartFile multipartFile) {
        String name = multipartFile.getOriginalFilename();
        String suffix = name.substring(name.lastIndexOf(".") + 1);
        String fileName = UUID.randomUUID().toString() + "-" + Calendar.getInstance().getTimeInMillis() + "." + suffix;
        if (multipartFile.getSize() > 0) {
            File file = new File(defaultUrl + "\\answer\\" + fileName);
            try {
                multipartFile.transferTo(file);
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }

        }
        return fileName;
    }

    /**
     * 上传考试途中的学生照片
     *
     * @param multipartFile 文件
     * @return 结果
     */
    @Override
    public String uploadImage(MultipartFile multipartFile) {
        String name = multipartFile.getOriginalFilename();
        String suffix = name.substring(name.lastIndexOf(".") + 1);
        String fileName = UUID.randomUUID().toString() + "-" + Calendar.getInstance().getTimeInMillis() + "." + suffix;
        if (multipartFile.getSize() > 0) {
            File file = new File(defaultUrl + "\\image\\" + fileName);
            try {
                multipartFile.transferTo(file);
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }

        }
        return fileName;
    }

    /**
     * 获取处理后的文件
     *
     * @param detailExport 数据
     * @return 文件
     */
    @Override
    public File detailExport(JSONObject detailExport) {
        File file = new File("成绩明细表.xls");
        List<LinkedHashMap<String, String>> dataList = detailExport.getObject("list", ArrayList.class);

        if (detailExport.getInteger("code") == 2000) {
            EasyExcel.write(file)
                    .excelType(ExcelTypeEnum.XLS)
                    .sheet("考试成绩明细")
                    .doWrite(dataParseDetail(dataList));
        }
        return file;
    }

    /**
     * 根据试卷id 导出试卷统计数据excel
     *
     * @param list 明细数据
     * @return 文件
     */
    @Override
    public File countExport(List<CountData> list) {
        File file = new File("试卷统计明细.xls");
        EasyExcel.write(file)
                .head(CountData.class)
                .excelType(ExcelTypeEnum.XLS)
                .sheet("考试成绩明细")
                .doWrite(list);
        return file;
    }

    /**
     * 备份数据库信息
     */
    @Override
    public boolean backup() {
        String savePath = defaultUrl + "\\database";
        //目录不存在则新建
        File saveFile = new File(savePath);
        if (!saveFile.exists()) {
            saveFile.mkdirs();
        }

        //在地址后补充系统默认分隔符
        if (!savePath.endsWith(File.separator)) {
            savePath = savePath + File.separator;
        }

        PrintWriter printWriter = null;

        BufferedReader bufferedReader = null;

        try {
            Runtime runtime = Runtime.getRuntime();

            //为解决找不到路径所以用了这个方式
            URL databaseUrl = new URL("file:///" + url);
            String path = databaseUrl.getPath();

            //"mysqldump -h127.0.0.1 -uroot -P3306 -proot test"
            String cmd = "\\mysqldump -h" + hostIP + " -u" + username + " -P" + hostPort + " -p" + password + " " + databaseName;

            cmd = path + cmd;
            System.out.println(cmd);
            Process process = runtime.exec(cmd);

            InputStreamReader inputStreamReader = new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8);
            bufferedReader = new BufferedReader(inputStreamReader);

            printWriter = new PrintWriter(new OutputStreamWriter(new FileOutputStream(savePath + fileName), StandardCharsets.UTF_8));
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                printWriter.println(line);
            }
            printWriter.flush();
            try {
                if (process.waitFor() == 0) {
                    return true;
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
                if (printWriter != null) {
                    printWriter.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return false;
    }

    /**
     * 数据库恢复
     *
     */
    @Override
    public boolean recover() {
        String savePath = defaultUrl + "\\database";
        File imporFile = new File(savePath);
        if (!imporFile.exists()) {
            imporFile.mkdirs();
        }

        if (!savePath.endsWith(File.separator)) {
            savePath  = savePath  + File.separator;
        }

        //mysql -h127.0.0.1 -uroot -P3306 -p test<C:\chengzheming\backupDatabase\
        try {
            URL databaseUrl = new URL("file:///" + url);
            String path = databaseUrl.getPath();
            Process process = Runtime.getRuntime().exec(path+"\\mysql -h"+hostIP+" -P"+hostPort+" -u"+username+" -p"+password+" "+databaseName+"<"+savePath+fileName);
            if (process.waitFor()==0){
                return true;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return false;

    }

    public List<List<String>> dataParseDetail(List<LinkedHashMap<String, String>> dataList) {
        List<List<String>> list = new ArrayList<>();
        //表头列表，记录表头
        List<String> titleName = new ArrayList<>();
        if (dataList.size() != 0) {
            LinkedHashMap<String, String> hashMap = dataList.get(0);
            //获取HashMap 的 KeySet
            Set<String> set = hashMap.keySet();
            //迭代作为表头
            titleName.addAll(set);
            list.add(titleName);
            for (LinkedHashMap<String, String> map : dataList) {
                List<String> fieldList = new ArrayList<>();
                for (String key : map.keySet()) {
                    fieldList.add(map.get(key));
                }
                list.add(fieldList);
            }
        }
        return list;
    }
}
