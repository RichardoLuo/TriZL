# TriZL 网上书店
数据库课设

## 说明

**Backend**

1）配置

1. mysql密码需要mysql_native_password，此处为方便直接直接置空
   ```bash
   ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY ''
   ```
   
2. mysql访问ip权限要打开

3. 导入数据库文件(数据库需要提前建立schema: bookstore)
   ```bash
   mysql -uroot -p bookstore < bookstore.sql
   ```
   (导出数据库文件, 其中--host是目标主机ip，如果是本机可不加该参数)
   ```bash
   "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" --no-defaults -uroot -p --host=10.243.56.142 bookstore > bookstore.sql
   ```

4. 安装windows redis

5. npm install

6. 修改config下的配置文件，主要是ip地址

7. 根据package.json启动即可

2）使用

​	1.  `config`  文件夹下面修改  `db.js`  和  `ip.js`  

​		 `server`  确认真正展示的   `swagger api`   界面的主机

​		  `database`  确认使用数据库

 
   2.  `node ./bin/www`   启动项目

**Frontend**

1） 配置

   `js`   文件夹下面   `config.js`   是请求的后端IP，如果在本地运行, 请改成   `localhost`

 2）使用

​	下载 http-server 组件

​	```	npm install http-server -g```

​	前端界面使用cookie， 所以如果想要看效果，请在Frontend文件夹下使用

<<<<<<< HEAD
​	`http-server`

​	然后访问`localhost:8080` 来观看效果

=======

​	```python -m SimpleHTTPServer 8888```


​	然后访问  `localhost:8888`  来观看效果
>>>>>>> b71f5f147022d48874a938173f79339551025faa
