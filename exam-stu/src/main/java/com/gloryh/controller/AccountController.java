package com.gloryh.controller;

import com.alibaba.fastjson.JSONObject;
import com.gloryh.feign.AccountFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 登录业务
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountFeign accountFeign;

    @GetMapping("/login/{role}/{username}/{password}")
    public JSONObject login(@PathVariable String role, @PathVariable String username, @PathVariable String password) {
        JSONObject jsonObject = accountFeign.login(role, username, password);
        return jsonObject;
    }
    @PutMapping("/editPassword/{type}")
    public JSONObject editPassword(@PathVariable String type,@RequestParam String username ,@RequestParam String oldPassword,@RequestParam String newPassword){
        return accountFeign.editPassword(type,username,oldPassword,newPassword);
    }


}
