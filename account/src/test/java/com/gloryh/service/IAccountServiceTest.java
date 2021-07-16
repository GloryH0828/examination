package com.gloryh.service;

import com.gloryh.entity.Admin;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * TODO
 *
 * @author 黄光辉
 * @since 2021/3/5
 **/
@SpringBootTest
public class IAccountServiceTest {


    @Autowired
    private IAccountService accountService;

    @Test
    public void test() {
        Admin admin;
        admin = accountService.adminLogin("admin", "123");
        System.out.println(admin);
    }

}