package com.gloryh.entity;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;

import java.util.List;

/**
 * 图表显示实体类
 *
 * @author 黄光辉
 * @since 2021/3/19
 **/
@Data
public class Echarts {
    private JSONObject title;
    private JSONObject tooltip;
    private JSONObject legend;
    private JSONObject grid;
    private JSONObject xAxis;
    private JSONObject yAxis;
    private List<JSONObject> series;


}
