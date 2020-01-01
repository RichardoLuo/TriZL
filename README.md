# TriZL 网上书店
数据库课设

## 说明

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
3. 安装windows redis
4. npm install
5. 修改config下的配置文件，主要是ip地址
6. 根据package.json启动即可