package com.gloryh.entity;

import lombok.Data;

/**
 * 管理员实体类
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@Data
public class Admin {
    public Integer admin_id;
    public String admin_username;
    public String admin_password;
}
