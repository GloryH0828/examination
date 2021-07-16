package com.gloryh.feign;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 登录业务跳转
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@Repository
@FeignClient(value = "account")
public interface AccountFeign {
    /**
     * 登录判断
     *
     * @param role     角色
     * @param username 用户名
     * @param password 密码
     * @return JSONObject
     */
    @PostMapping("/login/{role}/{username}/{password}")
    public JSONObject login(@PathVariable String role, @PathVariable String username, @PathVariable String password);

    /**
     * 修改教师或学生密码
     * @param type  角色身份
     * @param oldPassword 旧密码
     * @param newPassword 新密码
     * @param username 用户名
     * @return 结果
     */
    @PutMapping("/editPassword/{type}")
    JSONObject editPassword(@PathVariable String type,@RequestParam String username, @RequestParam String oldPassword,@RequestParam String newPassword);
}
