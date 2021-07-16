/*
 Navicat Premium Data Transfer

 Source Server         : 5.7
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : localhost:3306
 Source Schema         : online_examination

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 14/04/2021 12:58:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，管理员id',
  `admin_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员帐号',
  `admin_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员密码',
  PRIMARY KEY (`admin_id`, `admin_password`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123456');

-- ----------------------------
-- Table structure for answer_test_student
-- ----------------------------
DROP TABLE IF EXISTS `answer_test_student`;
CREATE TABLE `answer_test_student`  (
  `student_id` int(11) NOT NULL DEFAULT 0 COMMENT '学生id',
  `test_id` int(11) NOT NULL COMMENT '试卷id',
  `problem_id` int(11) NOT NULL COMMENT '对应的题目id 用来查询评分点',
  `answer_is_image` int(255) NULL DEFAULT 0 COMMENT '判断是否上传了照片作为答案，0=没有，1=有',
  `test_answer_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '答案照片',
  `test_answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试题答案',
  `test_status` int(255) NULL DEFAULT 0 COMMENT '试卷状态，0=未批改，1=正在批改，2=已批改',
  `test_teacher` int(255) NULL DEFAULT NULL COMMENT '批改的试卷教师id',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test_score` float NULL DEFAULT 0 COMMENT '得分',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `student`(`student_id`) USING BTREE,
  INDEX `test`(`test_id`) USING BTREE,
  INDEX `problem`(`problem_id`) USING BTREE,
  INDEX `test_tea_username`(`test_teacher`) USING BTREE,
  CONSTRAINT `problem` FOREIGN KEY (`problem_id`) REFERENCES `problem_database` (`problem_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `student` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `test` FOREIGN KEY (`test_id`) REFERENCES `test` (`test_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `test_tea_username` FOREIGN KEY (`test_teacher`) REFERENCES `teacher` (`teacher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of answer_test_student
-- ----------------------------
INSERT INTO `answer_test_student` VALUES (1, 2, 19, 0, NULL, 'B', 2, 2, 1, 1);
INSERT INTO `answer_test_student` VALUES (1, 2, 21, 0, NULL, 'B|C', 2, 2, 2, 0);
INSERT INTO `answer_test_student` VALUES (1, 2, 30, 0, NULL, '对', 2, 2, 3, 1);
INSERT INTO `answer_test_student` VALUES (1, 2, 25, 0, NULL, 'fsdsdf', 2, 2, 4, 0);
INSERT INTO `answer_test_student` VALUES (1, 2, 8, 1, 'd5956eff-53a3-4465-983b-a973496b46c1-1617005582954.docx', NULL, 2, 2, 5, 1);
INSERT INTO `answer_test_student` VALUES (1, 2, 28, 1, '', NULL, 2, 2, 6, 1);
INSERT INTO `answer_test_student` VALUES (2, 4, 33, 0, NULL, 'A', 0, NULL, 13, 0);
INSERT INTO `answer_test_student` VALUES (1, 5, 19, 0, NULL, 'A', 0, NULL, 14, 0);
INSERT INTO `answer_test_student` VALUES (1, 5, 22, 0, NULL, 'A|B', 0, NULL, 15, 0);
INSERT INTO `answer_test_student` VALUES (1, 5, 7, 0, NULL, '对', 0, NULL, 16, 0);
INSERT INTO `answer_test_student` VALUES (1, 5, 4, 0, NULL, '123123', 0, NULL, 17, 0);

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class`  (
  `class_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '班级id，主键，自增',
  `class_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '班级名',
  PRIMARY KEY (`class_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES (1, '计科172班');
INSERT INTO `class` VALUES (2, '计科171班');
INSERT INTO `class` VALUES (3, '计科181班');
INSERT INTO `class` VALUES (4, '计科182班');
INSERT INTO `class` VALUES (59, '计科161班');
INSERT INTO `class` VALUES (60, '计科162班');
INSERT INTO `class` VALUES (61, '计科173班');
INSERT INTO `class` VALUES (62, '计科173');

-- ----------------------------
-- Table structure for class_course_teacher
-- ----------------------------
DROP TABLE IF EXISTS `class_course_teacher`;
CREATE TABLE `class_course_teacher`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `c_id` int(11) NOT NULL COMMENT '班级id',
  `c_t_id` int(11) NOT NULL COMMENT '对应的课程-教师信息',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cla_id`(`c_id`) USING BTREE,
  INDEX `cla_tea_id`(`c_t_id`) USING BTREE,
  CONSTRAINT `cla_id` FOREIGN KEY (`c_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cla_tea_id` FOREIGN KEY (`c_t_id`) REFERENCES `course_teacher` (`c_t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of class_course_teacher
-- ----------------------------
INSERT INTO `class_course_teacher` VALUES (1, 1, 1);
INSERT INTO `class_course_teacher` VALUES (10, 2, 2);
INSERT INTO `class_course_teacher` VALUES (16, 4, 12);
INSERT INTO `class_course_teacher` VALUES (26, 3, 22);
INSERT INTO `class_course_teacher` VALUES (27, 1, 25);
INSERT INTO `class_course_teacher` VALUES (28, 4, 26);
INSERT INTO `class_course_teacher` VALUES (29, 4, 27);
INSERT INTO `class_course_teacher` VALUES (30, 4, 28);
INSERT INTO `class_course_teacher` VALUES (31, 4, 29);
INSERT INTO `class_course_teacher` VALUES (32, 4, 30);
INSERT INTO `class_course_teacher` VALUES (33, 4, 31);
INSERT INTO `class_course_teacher` VALUES (34, 4, 32);
INSERT INTO `class_course_teacher` VALUES (35, 4, 33);
INSERT INTO `class_course_teacher` VALUES (36, 4, 34);
INSERT INTO `class_course_teacher` VALUES (37, 4, 35);

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `course_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '课程id，主键',
  `course_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程名',
  PRIMARY KEY (`course_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES (1, 'C++');
INSERT INTO `course` VALUES (2, 'Java');
INSERT INTO `course` VALUES (3, 'Python');
INSERT INTO `course` VALUES (4, 'C#');
INSERT INTO `course` VALUES (5, '计算机组成原理');
INSERT INTO `course` VALUES (6, '软件工程');

-- ----------------------------
-- Table structure for course_teacher
-- ----------------------------
DROP TABLE IF EXISTS `course_teacher`;
CREATE TABLE `course_teacher`  (
  `c_t_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  PRIMARY KEY (`c_t_id`) USING BTREE,
  INDEX `teacher_id`(`teacher_id`) USING BTREE,
  INDEX `course_id`(`course_id`) USING BTREE,
  CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of course_teacher
-- ----------------------------
INSERT INTO `course_teacher` VALUES (1, 1, 1);
INSERT INTO `course_teacher` VALUES (2, 2, 2);
INSERT INTO `course_teacher` VALUES (12, 2, 13);
INSERT INTO `course_teacher` VALUES (22, 5, 23);
INSERT INTO `course_teacher` VALUES (23, 2, 24);
INSERT INTO `course_teacher` VALUES (24, 2, 25);
INSERT INTO `course_teacher` VALUES (25, 2, 26);
INSERT INTO `course_teacher` VALUES (26, 2, 27);
INSERT INTO `course_teacher` VALUES (27, 2, 28);
INSERT INTO `course_teacher` VALUES (28, 2, 29);
INSERT INTO `course_teacher` VALUES (29, 2, 30);
INSERT INTO `course_teacher` VALUES (30, 2, 31);
INSERT INTO `course_teacher` VALUES (31, 2, 32);
INSERT INTO `course_teacher` VALUES (32, 2, 33);
INSERT INTO `course_teacher` VALUES (33, 2, 34);
INSERT INTO `course_teacher` VALUES (34, 2, 35);
INSERT INTO `course_teacher` VALUES (35, 2, 36);

-- ----------------------------
-- Table structure for problem_database
-- ----------------------------
DROP TABLE IF EXISTS `problem_database`;
CREATE TABLE `problem_database`  (
  `problem_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '题目id，主键，自增',
  `problem_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '题目内容，将题目内容，题目问题，题目类型，题目选项，主观题分类，照片参数合并为 Json 格式存放，并作为problem_content 字段存入数据库',
  `problem_answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '题目答案',
  `problem_type` int(255) NULL DEFAULT NULL,
  `course_id` int(11) NOT NULL COMMENT '对应课程id',
  `problem_chapter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '对应章节',
  `problem_knowledge_point` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '对应知识点',
  PRIMARY KEY (`problem_id`) USING BTREE,
  INDEX `course`(`course_id`) USING BTREE,
  CONSTRAINT `course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 106 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of problem_database
-- ----------------------------
INSERT INTO `problem_database` VALUES (1, '{\"option_d\":\"char\",\"image\":\"c914a06f-b810-4ef3-81a1-efbb1b5a099e-1616139454216.jpg\",\"isImage\":\"true\",\"option_b\":\"long\",\"option_c\":\"int\",\"question\":\"定义整型使用的是：\",\"option_a\":\"Array\",\"content\":\"整型\"}', 'C', 1, 2, '第一章', '整型');
INSERT INTO `problem_database` VALUES (2, '{\"option_d\":\"Array\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"long\",\"option_c\":\"char\",\"question\":\"下列选项中，是基本数据类型的有：\",\"option_a\":\"String\",\"content\":\"基本数据类型\"}', 'B|C', 2, 2, '第二章', '基本数据类型');
INSERT INTO `problem_database` VALUES (4, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"Java 一共有几种基本数据类型\",\"content\":\"基本数据类型\"}', '8', 3, 2, '第二章', '基本数据类型');
INSERT INTO `problem_database` VALUES (7, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"Java中，字段 interface 用于定义接口\",\"content\":\"interface\"}', '对', 4, 2, '第三章', '接口');
INSERT INTO `problem_database` VALUES (8, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"1，对于数据库进行增删改查操作的字段分别是？\\n2，分组操作使用的字段为？、\\n3，升序排序是使用什么字段？\",\"content\":\"数据库基本操作\",\"point\":\"1，SELECT、INSERT、DELETE、UPDATE\\n2，GROUP BY\\n3，ORDER BY ASC\"}', '对照评分点', 5, 2, '第四章', '数据库操作');
INSERT INTO `problem_database` VALUES (12, '{\"image\":\"49ae8452-20a2-410a-8f56-7014febe9183-1615983912337.jpg\",\"isImage\":\"true\",\"question\":\"如题\",\"content\":\"如题\",\"point\":\"如题\"}', '对照评分点', 5, 2, '第一章', 'C++');
INSERT INTO `problem_database` VALUES (19, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+1\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (21, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+1\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (22, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*1\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (23, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\",\"point\":\"2为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (25, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于3\",\"content\":\"1+1\"}', '错', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (27, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\",\"point\":\"2为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (28, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*2\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (30, '{\"image\":\"670cf9b7-a823-440a-bd84-3352aad2cf61-1616132990557.jpg\",\"isImage\":\"true\",\"question\":\"类的继承使用的字段为 extends\",\"content\":\"判断\"}', '对', 4, 2, '第五章', 'Java继承');
INSERT INTO `problem_database` VALUES (32, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"System.out.println(\\\"Hello World\\\");\",\"content\":\"输出 HelloWord 可以使用：\"}', '对', 4, 2, '第一章', 'Hello World');
INSERT INTO `problem_database` VALUES (33, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+1\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (34, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*1\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (35, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"请问\",\"content\":\"qwe\"}', '错', 4, 2, '第五章', 'XX');
INSERT INTO `problem_database` VALUES (36, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+1\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (37, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*1\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (38, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+2\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (39, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*2\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (40, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+3\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (41, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*3\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (42, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+4\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (43, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*4\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (44, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1+5\"}', 'B', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (45, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"等于几\",\"option_a\":\"1\",\"content\":\"1*5\"}', 'A', 1, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (46, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+1\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (47, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*1\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (48, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+2\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (49, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*2\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (50, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+3\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (51, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*3\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (52, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+4\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (53, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*4\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (54, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1+5\"}', 'A|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (55, '{\"option_d\":\"4\",\"image\":\"\",\"isImage\":\"false\",\"option_b\":\"2\",\"option_c\":\"3\",\"question\":\"不等于几\",\"option_a\":\"1\",\"content\":\"1*5\"}', 'B|C|D', 2, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (56, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\"}', '2', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (57, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*2\"}', '1|2', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (58, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+2\"}', '3', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (59, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*3\"}', '1|3', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (60, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+3\"}', '4', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (61, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*4\"}', '1|4', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (62, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+4\"}', '5', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (63, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*5\"}', '1|5', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (64, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+5\"}', '6', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (65, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*6\"}', '1|6', 3, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (66, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于3\",\"content\":\"1+1\"}', '错', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (67, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于1\",\"content\":\"1*1\"}', '对', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (68, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于1\",\"content\":\"1+2\"}', '错', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (69, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于3\",\"content\":\"1*2\"}', '对', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (70, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于5\",\"content\":\"1+3\"}', '错', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (71, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于7\",\"content\":\"1*3\"}', '对', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (72, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于9\",\"content\":\"1+4\"}', '错', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (73, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于11\",\"content\":\"1*4\"}', '对', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (74, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于13\",\"content\":\"1+5\"}', '错', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (75, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于15\",\"content\":\"1*5\"}', '对', 4, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (76, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\",\"point\":\"2为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (77, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*2\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (78, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+2\",\"point\":\"3为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (79, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*3\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (80, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+3\",\"point\":\"4为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (81, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*4\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (82, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+4\",\"point\":\"5为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (83, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*5\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (84, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+5\",\"point\":\"6为满分，否则不得分\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (85, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*6\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 5, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (86, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\",\"point\":\"2为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (87, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*2\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (88, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+2\",\"point\":\"3为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (89, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*3\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (90, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+3\",\"point\":\"4为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (91, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*4\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (92, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+4\",\"point\":\"5为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (93, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*5\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (94, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+5\",\"point\":\"6为满分，否则不得分\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (95, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*6\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 6, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (96, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+1\",\"point\":\"2为满分，否则不得分\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (97, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*2\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (98, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+2\",\"point\":\"3为满分，否则不得分\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (99, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*3\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (100, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+3\",\"point\":\"4为满分，否则不得分\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (101, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*4\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (102, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+4\",\"point\":\"5为满分，否则不得分\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (103, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*5\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (104, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"等于几\",\"content\":\"1+5\",\"point\":\"6为满分，否则不得分\"}', '对照评分点', 7, 2, '第一章', 'XXX');
INSERT INTO `problem_database` VALUES (105, '{\"image\":\"\",\"isImage\":\"false\",\"question\":\"分别等于几\",\"content\":\"1*1和1*6\",\"point\":\"答出一道给一半分数\"}', '对照评分点', 7, 2, '第一章', 'XXX');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `student_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学生id，主键，自增',
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '学生姓名',
  `student_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '学生学号',
  `student_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '学生登录密码',
  `student_sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生性别',
  `student_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生电话',
  `student_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生邮箱',
  `class_id` int(11) NOT NULL COMMENT '所在班级id',
  PRIMARY KEY (`student_id`) USING BTREE,
  INDEX `class_id`(`class_id`) USING BTREE,
  CONSTRAINT `class_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '黄光辉', '201701014238', '123123', '男', NULL, NULL, 2);
INSERT INTO `student` VALUES (2, '应俊杰', '201701014242', '123456', '男', NULL, NULL, 2);
INSERT INTO `student` VALUES (3, '张三', '20170101xxxx', '123456', '男', NULL, '22222@qq.com', 2);
INSERT INTO `student` VALUES (4, '李四', '20170102xxxx', '123456', '男', NULL, '22223@qq.com', 2);
INSERT INTO `student` VALUES (5, '张三', '20170101xxxx', '123456', '男', '185xxxxxxxx', '22222@qq.com', 2);
INSERT INTO `student` VALUES (6, '李四', '20170102xxxx', '123456', '男', '186xxxxxxxx', '22223@qq.com', 4);
INSERT INTO `student` VALUES (7, '赵六', '123123123', '123456', '男', NULL, NULL, 2);
INSERT INTO `student` VALUES (8, '张三1', '20170103xxxx', '123456', '男', '187xxxxxxxx', '22224@qq.com', 1);
INSERT INTO `student` VALUES (9, '李四1', '20170104xxxx', '123456', '男', '188xxxxxxxx', '22225@qq.com', 1);
INSERT INTO `student` VALUES (10, '张三2', '20170105xxxx', '123456', '男', '189xxxxxxxx', '22226@qq.com', 1);
INSERT INTO `student` VALUES (11, '李四2', '20170106xxxx', '123456', '男', '190xxxxxxxx', '22227@qq.com', 1);
INSERT INTO `student` VALUES (12, '张三3', '20170107xxxx', '123456', '男', '191xxxxxxxx', '22228@qq.com', 1);
INSERT INTO `student` VALUES (13, '李四3', '20170108xxxx', '123456', '男', '192xxxxxxxx', '22229@qq.com', 1);
INSERT INTO `student` VALUES (14, '张三4', '20170109xxxx', '123456', '男', '193xxxxxxxx', '22230@qq.com', 1);
INSERT INTO `student` VALUES (15, '李四4', '20170110xxxx', '123456', '男', '194xxxxxxxx', '22231@qq.com', 1);
INSERT INTO `student` VALUES (16, '张三5', '20170111xxxx', '123456', '男', '195xxxxxxxx', '22232@qq.com', 1);

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '教师id，主键',
  `teacher_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `teacher_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师工号',
  `teacher_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师登录密码',
  `teacher_sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师性别',
  `teacher_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师电话',
  `teacher_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师邮箱',
  `teacher_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师状态：0=正常，1=禁用',
  PRIMARY KEY (`teacher_id`) USING BTREE,
  INDEX `teacher_username`(`teacher_username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES (1, 'hgh', 'hgh', '123456', NULL, NULL, NULL, NULL);
INSERT INTO `teacher` VALUES (2, 'ggg', 'ggg', '123123', NULL, NULL, NULL, NULL);
INSERT INTO `teacher` VALUES (13, '黄美丽', '1003', '123456', '女', NULL, NULL, NULL);
INSERT INTO `teacher` VALUES (23, '黄学玖', '1008', '123456', '男', NULL, NULL, NULL);
INSERT INTO `teacher` VALUES (24, '张三', '10xx', '123456', '男', '185xxxxxxxx', '22222@qq.com', NULL);
INSERT INTO `teacher` VALUES (25, '李四', '10xx', '123456', '男', '186xxxxxxxx', '22223@qq.com', NULL);
INSERT INTO `teacher` VALUES (26, '哈哈', '123123123', '123456', '女', NULL, NULL, NULL);
INSERT INTO `teacher` VALUES (27, '张三1', '10xx1', '123456', '男', '185xxxxxxxx', '22222@qq.com', NULL);
INSERT INTO `teacher` VALUES (28, '李四1', '10xx2', '123456', '男', '186xxxxxxxx', '22223@qq.com', NULL);
INSERT INTO `teacher` VALUES (29, '张三2', '10xx3', '123456', '男', '187xxxxxxxx', '22224@qq.com', NULL);
INSERT INTO `teacher` VALUES (30, '李四2', '10xx4', '123456', '男', '188xxxxxxxx', '22225@qq.com', NULL);
INSERT INTO `teacher` VALUES (31, '张三3', '10xx5', '123456', '男', '189xxxxxxxx', '22226@qq.com', NULL);
INSERT INTO `teacher` VALUES (32, '李四3', '10xx6', '123456', '男', '190xxxxxxxx', '22227@qq.com', NULL);
INSERT INTO `teacher` VALUES (33, '张三4', '10xx7', '123456', '男', '191xxxxxxxx', '22228@qq.com', NULL);
INSERT INTO `teacher` VALUES (34, '李四4', '10xx8', '123456', '男', '192xxxxxxxx', '22229@qq.com', NULL);
INSERT INTO `teacher` VALUES (35, '张三5', '10xx9', '123456', '男', '193xxxxxxxx', '22230@qq.com', NULL);
INSERT INTO `teacher` VALUES (36, '李四5', '10xx10', '123456', '男', '194xxxxxxxx', '22231@qq.com', NULL);

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `test_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '试卷id，主键，自增',
  `test_end_time` datetime NOT NULL COMMENT '考试结束时间',
  `test_creater` int(255) NOT NULL COMMENT '创建者，也是默认的改卷人，对应教师id',
  `test_begin_time` datetime NOT NULL COMMENT '考试开始时间',
  `test_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '试卷名称',
  `course_id` int(11) NOT NULL COMMENT '课程ID',
  PRIMARY KEY (`test_id`) USING BTREE,
  INDEX `test_creater`(`test_creater`) USING BTREE,
  INDEX `cour`(`course_id`) USING BTREE,
  CONSTRAINT `cour` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `test_creater` FOREIGN KEY (`test_creater`) REFERENCES `teacher` (`teacher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES (2, '2021-03-26 19:00:00', 2, '2021-03-24 21:51:19', '测试', 2);
INSERT INTO `test` VALUES (3, '2021-04-24 00:00:00', 2, '2021-03-23 13:24:43', '测试', 2);
INSERT INTO `test` VALUES (4, '2021-04-05 16:37:02', 2, '2021-04-04 16:36:57', '2020-2021年度测试', 2);
INSERT INTO `test` VALUES (5, '2021-04-17 00:00:00', 2, '2021-04-11 13:33:08', '测试', 2);
INSERT INTO `test` VALUES (6, '2021-04-20 00:00:00', 2, '2021-04-14 11:58:53', 'cececec ', 2);
INSERT INTO `test` VALUES (7, '2021-04-15 12:52:25', 2, '2021-04-14 12:54:24', 'cececcece', 2);

-- ----------------------------
-- Table structure for test_problem
-- ----------------------------
DROP TABLE IF EXISTS `test_problem`;
CREATE TABLE `test_problem`  (
  `exam_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `test_id` int(11) NOT NULL COMMENT '对应试卷id',
  `exam_score` int(11) NULL DEFAULT NULL COMMENT '题目分值',
  `problem_id` int(11) NOT NULL COMMENT '对应的题库题目id',
  PRIMARY KEY (`exam_id`) USING BTREE,
  INDEX `problem_id`(`problem_id`) USING BTREE,
  INDEX `test_id`(`test_id`) USING BTREE,
  CONSTRAINT `problem_id` FOREIGN KEY (`problem_id`) REFERENCES `problem_database` (`problem_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `test_id` FOREIGN KEY (`test_id`) REFERENCES `test` (`test_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 145 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of test_problem
-- ----------------------------
INSERT INTO `test_problem` VALUES (1, 2, 1, 19);
INSERT INTO `test_problem` VALUES (2, 2, 1, 21);
INSERT INTO `test_problem` VALUES (3, 2, 1, 25);
INSERT INTO `test_problem` VALUES (4, 2, 1, 30);
INSERT INTO `test_problem` VALUES (5, 2, 1, 8);
INSERT INTO `test_problem` VALUES (6, 2, 1, 28);
INSERT INTO `test_problem` VALUES (7, 3, 1, 1);
INSERT INTO `test_problem` VALUES (8, 3, 1, 19);
INSERT INTO `test_problem` VALUES (9, 3, 1, 2);
INSERT INTO `test_problem` VALUES (10, 3, 1, 21);
INSERT INTO `test_problem` VALUES (11, 3, 1, 4);
INSERT INTO `test_problem` VALUES (12, 3, 1, 25);
INSERT INTO `test_problem` VALUES (13, 3, 1, 7);
INSERT INTO `test_problem` VALUES (14, 3, 1, 30);
INSERT INTO `test_problem` VALUES (15, 3, 1, 32);
INSERT INTO `test_problem` VALUES (16, 3, 1, 27);
INSERT INTO `test_problem` VALUES (17, 4, 1, 33);
INSERT INTO `test_problem` VALUES (18, 5, 1, 19);
INSERT INTO `test_problem` VALUES (19, 5, 1, 22);
INSERT INTO `test_problem` VALUES (20, 5, 1, 4);
INSERT INTO `test_problem` VALUES (21, 5, 1, 7);
INSERT INTO `test_problem` VALUES (22, 5, 1, 23);
INSERT INTO `test_problem` VALUES (23, 5, 1, 27);
INSERT INTO `test_problem` VALUES (24, 6, 1, 37);
INSERT INTO `test_problem` VALUES (25, 6, 1, 1);
INSERT INTO `test_problem` VALUES (26, 6, 1, 1);
INSERT INTO `test_problem` VALUES (27, 6, 1, 19);
INSERT INTO `test_problem` VALUES (28, 6, 1, 44);
INSERT INTO `test_problem` VALUES (29, 6, 1, 37);
INSERT INTO `test_problem` VALUES (30, 6, 1, 33);
INSERT INTO `test_problem` VALUES (31, 6, 1, 40);
INSERT INTO `test_problem` VALUES (32, 6, 1, 42);
INSERT INTO `test_problem` VALUES (33, 6, 1, 39);
INSERT INTO `test_problem` VALUES (34, 6, 1, 47);
INSERT INTO `test_problem` VALUES (35, 6, 1, 55);
INSERT INTO `test_problem` VALUES (36, 6, 1, 54);
INSERT INTO `test_problem` VALUES (37, 6, 1, 21);
INSERT INTO `test_problem` VALUES (38, 6, 1, 46);
INSERT INTO `test_problem` VALUES (39, 6, 1, 62);
INSERT INTO `test_problem` VALUES (40, 6, 1, 59);
INSERT INTO `test_problem` VALUES (41, 6, 1, 58);
INSERT INTO `test_problem` VALUES (42, 6, 1, 64);
INSERT INTO `test_problem` VALUES (43, 6, 1, 4);
INSERT INTO `test_problem` VALUES (44, 6, 1, 7);
INSERT INTO `test_problem` VALUES (45, 6, 1, 7);
INSERT INTO `test_problem` VALUES (46, 6, 1, 73);
INSERT INTO `test_problem` VALUES (47, 6, 1, 74);
INSERT INTO `test_problem` VALUES (48, 6, 1, 67);
INSERT INTO `test_problem` VALUES (49, 6, 1, 69);
INSERT INTO `test_problem` VALUES (50, 6, 1, 72);
INSERT INTO `test_problem` VALUES (51, 6, 1, 7);
INSERT INTO `test_problem` VALUES (52, 6, 1, 70);
INSERT INTO `test_problem` VALUES (53, 6, 1, 7);
INSERT INTO `test_problem` VALUES (54, 6, 1, 58);
INSERT INTO `test_problem` VALUES (55, 6, 1, 61);
INSERT INTO `test_problem` VALUES (56, 6, 1, 4);
INSERT INTO `test_problem` VALUES (57, 6, 1, 4);
INSERT INTO `test_problem` VALUES (58, 6, 1, 63);
INSERT INTO `test_problem` VALUES (59, 6, 1, 59);
INSERT INTO `test_problem` VALUES (60, 6, 1, 4);
INSERT INTO `test_problem` VALUES (61, 6, 1, 25);
INSERT INTO `test_problem` VALUES (62, 6, 1, 64);
INSERT INTO `test_problem` VALUES (63, 6, 1, 58);
INSERT INTO `test_problem` VALUES (64, 6, 1, 4);
INSERT INTO `test_problem` VALUES (65, 6, 1, 61);
INSERT INTO `test_problem` VALUES (66, 6, 1, 57);
INSERT INTO `test_problem` VALUES (67, 6, 1, 59);
INSERT INTO `test_problem` VALUES (68, 6, 1, 64);
INSERT INTO `test_problem` VALUES (69, 6, 1, 70);
INSERT INTO `test_problem` VALUES (70, 6, 1, 35);
INSERT INTO `test_problem` VALUES (71, 6, 1, 74);
INSERT INTO `test_problem` VALUES (72, 6, 1, 69);
INSERT INTO `test_problem` VALUES (73, 6, 1, 7);
INSERT INTO `test_problem` VALUES (74, 6, 1, 71);
INSERT INTO `test_problem` VALUES (75, 6, 1, 69);
INSERT INTO `test_problem` VALUES (76, 6, 1, 68);
INSERT INTO `test_problem` VALUES (77, 6, 1, 70);
INSERT INTO `test_problem` VALUES (78, 6, 1, 7);
INSERT INTO `test_problem` VALUES (79, 6, 1, 71);
INSERT INTO `test_problem` VALUES (80, 6, 1, 75);
INSERT INTO `test_problem` VALUES (81, 6, 1, 32);
INSERT INTO `test_problem` VALUES (82, 6, 1, 30);
INSERT INTO `test_problem` VALUES (83, 6, 1, 66);
INSERT INTO `test_problem` VALUES (84, 6, 1, 84);
INSERT INTO `test_problem` VALUES (85, 6, 1, 83);
INSERT INTO `test_problem` VALUES (86, 6, 1, 81);
INSERT INTO `test_problem` VALUES (87, 6, 1, 82);
INSERT INTO `test_problem` VALUES (88, 6, 1, 12);
INSERT INTO `test_problem` VALUES (89, 6, 11, 90);
INSERT INTO `test_problem` VALUES (90, 6, 11, 94);
INSERT INTO `test_problem` VALUES (91, 6, 11, 86);
INSERT INTO `test_problem` VALUES (92, 6, 11, 87);
INSERT INTO `test_problem` VALUES (93, 6, 11, 92);
INSERT INTO `test_problem` VALUES (94, 6, 1, 99);
INSERT INTO `test_problem` VALUES (95, 6, 1, 96);
INSERT INTO `test_problem` VALUES (96, 6, 1, 103);
INSERT INTO `test_problem` VALUES (97, 6, 1, 104);
INSERT INTO `test_problem` VALUES (98, 6, 1, 96);
INSERT INTO `test_problem` VALUES (99, 6, 11, 88);
INSERT INTO `test_problem` VALUES (100, 6, 11, 87);
INSERT INTO `test_problem` VALUES (101, 6, 11, 95);
INSERT INTO `test_problem` VALUES (102, 6, 11, 90);
INSERT INTO `test_problem` VALUES (103, 6, 11, 86);
INSERT INTO `test_problem` VALUES (104, 6, 1, 105);
INSERT INTO `test_problem` VALUES (105, 6, 1, 97);
INSERT INTO `test_problem` VALUES (106, 6, 1, 103);
INSERT INTO `test_problem` VALUES (107, 6, 1, 104);
INSERT INTO `test_problem` VALUES (108, 6, 1, 96);
INSERT INTO `test_problem` VALUES (109, 6, 1, 102);
INSERT INTO `test_problem` VALUES (110, 6, 1, 96);
INSERT INTO `test_problem` VALUES (111, 6, 1, 101);
INSERT INTO `test_problem` VALUES (112, 6, 1, 103);
INSERT INTO `test_problem` VALUES (113, 6, 1, 104);
INSERT INTO `test_problem` VALUES (114, 6, 1, 104);
INSERT INTO `test_problem` VALUES (115, 6, 1, 102);
INSERT INTO `test_problem` VALUES (116, 6, 1, 99);
INSERT INTO `test_problem` VALUES (117, 6, 1, 96);
INSERT INTO `test_problem` VALUES (118, 6, 1, 103);
INSERT INTO `test_problem` VALUES (119, 7, 11, 34);
INSERT INTO `test_problem` VALUES (120, 7, 11, 36);
INSERT INTO `test_problem` VALUES (121, 7, 11, 37);
INSERT INTO `test_problem` VALUES (122, 7, 11, 21);
INSERT INTO `test_problem` VALUES (123, 7, 11, 46);
INSERT INTO `test_problem` VALUES (124, 7, 11, 47);
INSERT INTO `test_problem` VALUES (125, 7, 11, 48);
INSERT INTO `test_problem` VALUES (126, 7, 11, 25);
INSERT INTO `test_problem` VALUES (127, 7, 11, 57);
INSERT INTO `test_problem` VALUES (128, 7, 11, 59);
INSERT INTO `test_problem` VALUES (129, 7, 11, 60);
INSERT INTO `test_problem` VALUES (130, 7, 8, 7);
INSERT INTO `test_problem` VALUES (131, 7, 8, 30);
INSERT INTO `test_problem` VALUES (132, 7, 8, 32);
INSERT INTO `test_problem` VALUES (133, 7, 8, 69);
INSERT INTO `test_problem` VALUES (134, 7, 11, 8);
INSERT INTO `test_problem` VALUES (135, 7, 11, 12);
INSERT INTO `test_problem` VALUES (136, 7, 11, 23);
INSERT INTO `test_problem` VALUES (137, 7, 11, 78);
INSERT INTO `test_problem` VALUES (138, 7, 6, 27);
INSERT INTO `test_problem` VALUES (139, 7, 6, 28);
INSERT INTO `test_problem` VALUES (140, 7, 6, 86);
INSERT INTO `test_problem` VALUES (141, 7, 6, 87);
INSERT INTO `test_problem` VALUES (142, 7, 11, 96);
INSERT INTO `test_problem` VALUES (143, 7, 11, 97);
INSERT INTO `test_problem` VALUES (144, 7, 11, 98);

-- ----------------------------
-- Table structure for test_student
-- ----------------------------
DROP TABLE IF EXISTS `test_student`;
CREATE TABLE `test_student`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `test_id` int(11) NOT NULL COMMENT '试卷id',
  `student_id` int(11) NOT NULL COMMENT '参与考试学生id',
  `student_status` int(11) NOT NULL DEFAULT 0 COMMENT '学生是否被禁用，0=否，1=是。默认为否',
  `login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生登录ip',
  `student_score` float NULL DEFAULT 0 COMMENT '学生试卷分数',
  `student_images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生考试期间拍摄图片',
  `student_end_time` datetime NULL DEFAULT NULL COMMENT '学生单独延时',
  `is_add_time` int(11) NULL DEFAULT 0 COMMENT '是否单独延时，0=否，1=是',
  `is_cancel` int(11) NULL DEFAULT 0 COMMENT '是否作废学生成绩，0=否，1=是',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `testt_id`(`test_id`) USING BTREE,
  INDEX `student_id`(`student_id`) USING BTREE,
  CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `testt_id` FOREIGN KEY (`test_id`) REFERENCES `test` (`test_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of test_student
-- ----------------------------
INSERT INTO `test_student` VALUES (1, 2, 1, 0, '', 0, NULL, '2021-03-30 18:19:00', 1, 1);
INSERT INTO `test_student` VALUES (2, 2, 2, 0, NULL, 0, NULL, '2021-03-26 00:00:00', 1, 0);
INSERT INTO `test_student` VALUES (3, 2, 3, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (4, 2, 4, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (5, 4, 2, 0, '125.41.212.6', 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (6, 5, 1, 1, '125.41.208.147', 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (7, 5, 2, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (8, 5, 3, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (9, 5, 4, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (10, 5, 5, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (11, 5, 7, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (12, 5, 6, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (13, 2, 5, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (14, 2, 7, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (15, 2, 6, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (16, 2, 9, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (17, 6, 1, 0, '', 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (18, 6, 2, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (19, 6, 3, 0, NULL, 0, NULL, NULL, 0, 0);
INSERT INTO `test_student` VALUES (20, 6, 4, 0, NULL, 0, NULL, NULL, 0, 0);

-- ----------------------------
-- Table structure for test_teacher
-- ----------------------------
DROP TABLE IF EXISTS `test_teacher`;
CREATE TABLE `test_teacher`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `test_id` int(11) NOT NULL COMMENT '试卷id',
  `teacher_id` int(11) NOT NULL COMMENT '阅卷教师id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `teac_id`(`teacher_id`) USING BTREE,
  INDEX `tes_id`(`test_id`) USING BTREE,
  CONSTRAINT `teac_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tes_id` FOREIGN KEY (`test_id`) REFERENCES `test` (`test_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of test_teacher
-- ----------------------------
INSERT INTO `test_teacher` VALUES (1, 2, 2);
INSERT INTO `test_teacher` VALUES (2, 2, 13);
INSERT INTO `test_teacher` VALUES (3, 5, 2);
INSERT INTO `test_teacher` VALUES (4, 5, 13);
INSERT INTO `test_teacher` VALUES (5, 6, 2);
INSERT INTO `test_teacher` VALUES (6, 6, 13);
INSERT INTO `test_teacher` VALUES (7, 6, 24);
INSERT INTO `test_teacher` VALUES (8, 6, 25);

SET FOREIGN_KEY_CHECKS = 1;
