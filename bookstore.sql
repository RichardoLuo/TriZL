-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 10.243.56.142    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `ISBN` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ReleaseTime` datetime DEFAULT NULL,
  `Price` float NOT NULL,
  `Repertory` int(11) NOT NULL,
  `Introduction` varchar(500) DEFAULT NULL,
  `Picture` varchar(500) DEFAULT NULL,
  `SoleNum` int(11) DEFAULT NULL,
  `AddTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('9787111302872','数据库系统实现','加西亚-莫利纳(Hector Garcia-Molina)','2010-05-01 00:00:00',59.5,20,'《数据库系统实现(第2版)》是斯坦福大学计算机科学专业数据库系列课程第二门课的教科书。书中对数据库系统实现原理进行了深入阐述，并具体讨论了数据库管理系统的三个主要成分——存储管理器、查询处理器和事务管理器的实现技术。此外，第2版充分反映了数据管理技术的新进展，对内容进行了扩充，除了在第1版中原有的“信息集成”一章（第10章）中加入了新的内容外，还增加了两个全新的章：“数据挖掘”（第11章）和“数据库系统与互联网”（第12章）。','/images/数据库系统实现.jpg',30,'2020-01-02 22:41:15'),('9787121084379','JavaScript语言精粹','Douglas Crockford','2009-04-01 00:00:00',35,30,'本书通过对JavaScript语言的分析，甄别出好的和坏的特性，从而提取出相对这门语言的整体而言具有更好的可靠性、可读性和可维护性的JavaScript的子集，以便你能用它创建真正可扩展的和高效的代码。','/images/JavaScript语言精粹.jpg',1,'2020-01-02 22:04:39'),('9787505414709','何以笙箫默','顾漫','2007-04-01 00:00:00',15,90,'.你以后会明白，如果世界上曾经有那个人出现过，其他人都会变成将就，而我，不愿意将就。','/images/何以笙箫默.jpg',30,'2020-01-02 22:33:09'),('9787505722460','明朝那些事儿（壹）','当年明月','2006-09-01 00:00:00',24.8,10,'从朱元璋的出身开始写起，到永乐大帝夺位的靖难之役结束为止。叙述了明朝最艰苦卓绝的开国过程。朱元璋pk陈友谅，谁堪问鼎天下？战太平、太湖大决战。卧榻之侧埋恶虎，铲除张士诚。徐达、常遇春等不世名将乘胜逐北破北元。更有明朝最大的谜团——永乐夺位、建文失踪的靖难之役。','/images/明朝那些事儿（壹）.jpg',1,'2020-01-02 21:51:30'),('9787535646262','刀剑神域 01','川原砾','2011-08-01 00:00:00',25,30,'无法完全攻略就无法离开游戏，GAME OVER也等于宣告玩家的“死亡”——大约一万名毫不知晓谜样次世代线上游戏“Sword Art Online刀剑神域（SAO）”“真相”为何的玩家登陆后，这场死亡战斗也随之揭开了序幕。','/images/刀剑神域 01.jpg',30,'2020-01-02 22:17:01'),('9787535647573','刀剑神域 02','川原砾','2011-10-01 00:00:00',24,30,'完全攻略前无法脱离的死亡战斗MMO“Sword Art Online刀剑神域”中，除了像主角桐人这种以抵达最上层为目标的“攻略组”，还有许多职业、想法各不相同的玩家存在。','/images/刀剑神域 02.jpg',30,'2020-01-02 22:21:06'),('9787535648518','刀剑神域 03','川原砾','2011-12-01 00:00:00',23,30,'桐人从禁忌的死亡战斗MMO“Sword Art Online刀剑神域”回到现实世界后，立刻前去寻找游戏时的伙伴，同时也是心仪对象的亚丝娜。','/images/刀剑神域 03.jpg',30,'2020-01-02 22:22:41'),('9787535650801','刀剑神域 04','川原砾','2012-02-01 00:00:00',23,30,'为了拯救尚未从SAO里归还的亚丝娜，桐人登录到可疑的网络游戏VRMMO“ALfheim Online”里。','/images/刀剑神域 04.jpg',30,'2020-01-02 22:23:52'),('9787535652898','刀剑神域 05','川原砾','2012-05-01 00:00:00',22,30,'那是突然发生在充斥枪械与钢铁的VRMMO“Gun Gale Online”里的“死枪”事件。被拿着漆黑之枪的迷之角色所击中的玩家，在现实世界里也会随之“死亡”……无法拒绝的桐人答应帮助调查，虽然对于“虚拟世界”对“现实世界”发生物理影响这件事感到怀疑，但他还是登录了“GGO”。','/images/刀剑神域 05.jpg',30,'2020-01-02 22:24:50'),('9787535654137','刀剑神域 06','川原砾','2012-07-01 00:00:00',28,30,'桐人为了调查枪与钢铁的VRMMO《Gun Gale Online》里所发生的“死枪”事件而登陆了该游戏。','/images/刀剑神域 06.jpg',30,'2020-01-02 22:26:01'),('9787535655172','刀剑神域 07','川原砾','2012-08-01 00:00:00',22,30,'在充满了精灵角色的次世代飞行系VRMMO《Alfheim Online》里，出现了奇妙的骚动。新地图“浮游城艾恩葛朗特”第24层主要街道的北部，出现了一名神秘人物。这人 以自己的“原创剑技”作为赌注与其他玩家进行一对一单挑，并且击败了所有对手。','/images/刀剑神域 07.jpg',30,'2020-01-02 22:26:49'),('9787535655844','刀剑神域 08','川原砾','2012-09-01 00:00:00',28,30,'《圈内事件》——《SAO》的中层地区发生了惨案，一名玩家被杀害。然而，遇害现场确实HP绝对不会减少的“安全圈内”。就算假设这是一起PK事件，依然找不出凶手杀人的方法……于是桐人与亚丝娜开始追查这宗悬案。','/images/刀剑神域 08.jpg',30,'2020-01-02 22:27:43'),('9787535656513','刀剑神域 09','川原砾','2012-10-01 00:00:00',28,30,'桐人一醒过来，发现自己掉进了到处都是参天巨木的森林——奇幻的“虚拟世界”当中。为了寻求线索而在附近乱逛的他邂逅了一名少年。这名虚拟世界的居民——也就是“NPC”的少年竟然拥有足以媲美人类的丰富情感表现。随着与尤吉欧的友情越来越深厚，桐人脑袋里也出现了过去的某段回忆。','/images/刀剑神域 09.jpg',30,'2020-01-02 22:28:38'),('9787535660084','刀剑神域 10','川原砾','2013-02-01 00:00:00',24,30,'桐人和尤吉欧成为了“北圣托利亚帝立修剑学院”的“初等练士”，各自在前辈索尔狄丽娜与格尔戈罗索的指导下学习，过着以人界最强的秩序执行者“整合骑士”为目标的每一天。','/images/刀剑神域 10.jpg',30,'2020-01-02 22:29:18'),('9787535662804','刀剑神域 11','川原砾','2013-07-01 00:00:00',23,30,'桐人进入这个神秘的幻想世界已经两年了。','/images/刀剑神域 11.jpg',30,'2020-01-02 22:30:07'),('9787539946993','杉杉来吃','顾漫','2011-08-01 00:00:00',25,90,'＂总裁，我绝对不敢觊觎你碗里的菜。＂＂觊觎也没关系。＂','/images/杉杉来吃.jpg',30,'2020-01-02 22:35:36'),('9787544258975','霍乱时期的爱情','加西亚·马尔克斯','2012-09-01 00:00:00',39.5,90,'“费尔明娜，”他对她说，“这个机会我已经等了半个多世纪，就是为了能再一次向您重申我对您永恒的忠诚和不渝的爱情。”','/images/霍乱时期的爱情.jpg',30,'2020-01-02 22:39:13'),('9787549204304','龙族Ⅱ','江南','2011-05-01 00:00:00',29.8,40,'全世界的混血精英纷纷飞往北京，而酒德麻衣团队也在北京不下了“杀龙之局”：魔兽世界副本、英雄级路明非账号、全方位监控。路明非和他的伙伴们纷纷潜入北京地铁，开始了新一轮的屠龙历程。','/images/龙族Ⅱ.jpg',60,'2020-01-02 22:10:15'),('9787549216468','龙族Ⅲ','江南','2013-01-01 00:00:00',29.8,40,'西伯利亚无名港，邦达列夫上校带来了前苏联解体的消息，他与赫尔佐格博士打成协议，将资助博士继续龙族基因方面的研究。临走前突发异变，邦达列夫枪击赫尔佐格，无名港下数千年的冰层里冰冻的龙尸忽然振翅，它的主人零号站在高空中迎击前苏联战机中队，而零号的女孩雷娜塔正躺在下方的冰面上。他们躲过了这次灾难，逃往中国。','/images/龙族Ⅲ.jpg',60,'2020-01-02 22:11:25'),('9787549237814','龙族Ⅳ','江南','2015-12-01 00:00:00',32,50,'路明非成为了卡塞尔学院的新任学生会主席，偶然中路明非发现，楚子航消失了，除了他，其他人都不记得有这个人曾经存在，并怀疑他在任务中脑震荡。路明非在痛苦中挣扎，找到远在小岛上上新娘课程的诺诺。他并不知道在他离开学院的当天，学院遭受袭击，蒙受重大损失，而他是嫌疑人。这一切充满了诡异，而芬格尔从古巴千里迢迢赶来助阵，由此路明非和芬格尔、诺诺决定回到了楚子航的故乡北京，寻找楚子航曾经留下的痕迹。却在无意中与诺诺闯入楚子航当年遇过的尼伯龙根。奥丁再次出现，长枪直指诺诺。路明非为了救诺诺，求助路明泽……','/images/龙族Ⅳ.jpg',60,'2020-01-02 22:12:30'),('9787551119832','微微一笑很倾城（典藏版） ','顾漫','2006-09-01 00:00:00',29.8,70,' 如果，早知道有一天我会这么爱你，我一定对你一见钟情。','/images/微微一笑很倾城（典藏版）.jpg',10,'2020-01-02 22:02:49'),('9787806643730','名侦探柯南1','青山刚昌','2002-07-01 00:00:00',6.9,40,'以福尔摩斯式的推理能力而声名大噪的高中生名侦探工藤新一，在一次追线索时，被歹徙强行灌下不和名的药，一夜之间变成了一个小孩，化名为“江户川柯南”。','/images/名侦探柯南1.jpg',19,'2020-01-02 22:06:45'),('9787807089353','龙族Ⅰ','江南','2010-04-01 00:00:00',24.8,40,'他以为他将这样度过一生，他以为他始终只是个衰小孩。但是，一封来自卡塞尔学院的录取通知书改变了他的一生。云层里透出神秘的吟唱：你也有神奇的父母，你也有热血的同伴，你的血管里流动着龙族的血液。而你的目标将是 —— 屠龙。','/images/龙族Ⅰ.jpg',60,'2020-01-02 22:09:02');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `MemberName` varchar(100) NOT NULL,
  `PassWD` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Mail` varchar(50) DEFAULT NULL,
  `Phone` varchar(11) DEFAULT NULL,
  `Address` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`MemberName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `OrderID` int(11) NOT NULL,
  `OrderTime` datetime NOT NULL,
  `ISBN` varchar(50) NOT NULL,
  `PerchaseNum` int(11) NOT NULL DEFAULT '1',
  `CustomerName` varchar(100) NOT NULL,
  `CustomerPhone` varchar(11) DEFAULT NULL,
  `CustomerAddr` varchar(500) NOT NULL,
  `OrderStatus` int(1) DEFAULT '0',
  PRIMARY KEY (`OrderID`,`ISBN`),
  KEY `ISBN` (`ISBN`),
  KEY `MemberName` (`CustomerName`),
  CONSTRAINT `ISBN` FOREIGN KEY (`ISBN`) REFERENCES `books` (`isbn`) ON UPDATE CASCADE,
  CONSTRAINT `MemberName` FOREIGN KEY (`CustomerName`) REFERENCES `members` (`membername`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-02 22:43:25
