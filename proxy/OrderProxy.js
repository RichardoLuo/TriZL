let OrderModel = require('../model/OrderModel');

let mysql = require('mysql');
let configDb = require('../config/db');
//建立连接池
let pool = mysql.createPool(configDb.mysql);

/**
 * 按订单号查询订单所有信息
 * @param id 订单号
 * @param callback
 */
exports.selectOrder = function (id,callback) {
    //database
    pool.getConnection((err,connection)=>{
        if(err){
            return callback(err);
        }
        else{
            connection.query(OrderModel.sql().selectOrder(id), function(err, rows, fields) {
                if (err)
                    return callback(err);

                if(rows.length === 0)
                    return callback("no order here");
                else{
                    let orderList = [];
                    for (let i = 0; i < rows.length; i++) {
                        orderList.push(OrderModel.change(rows[i]));
                    }
                    return callback(null,orderList);
                }
            });
        }
    });
};

/**
 * 新建订单
 * @param orderID
 * @param ISBN
 * @param perchaseNum
 * @param customerName
 * @param customerPhone
 * @param customerAddr
 * @param callback
 */
exports.insertOrder = function (orderID, ISBN, perchaseNum, customerName, customerPhone, customerAddr,callback) {
    //database
    pool.getConnection((err,connection)=>{
        if(err){
            return callback(err);
        }
        else{
            connection.query(OrderModel.sql().insertOrder(orderID, ISBN, perchaseNum, customerName, customerPhone, customerAddr), function(err, rows, fields) {
                if (err)
                    return callback(err);

                else{

                    return callback(null);
                }
            });
        }
    });
};

/**
 * 按订单号删除订单
 * @param id 订单号
 * @param callback
 */
exports.deleteOrder = function (id, callback) {
    //database
    pool.getConnection((err,connection)=>{
        if(err){
            return callback(err);
        }
        else{
            connection.query(OrderModel.sql().deleteOrder(id), function(err, rows, fields) {
                if (err)
                    return callback(err);

                else{

                    return callback(null);
                }
            });
        }
    });
};

/**
 * 更新订单运输状态
 * @param state
 * @param id
 */
exports.updateOrder = function (state,id, callback) {
    //database
    pool.getConnection((err,connection)=>{
        if(err){
            return callback(err);
        }
        else{
            connection.query(OrderModel.sql().updateOrder(state,id), function(err, rows, fields) {
                if (err)
                    return callback(err);

                else{

                    return callback(null);
                }
            });
        }
    });
}