let OrderProxy = require('../proxy/OrderProxy');

exports.selectOrder = function (req, res, next) {
    let orderID = req.params.orderID;
    OrderProxy.selectOrder(orderID,function (err,orderList) {
        if(err){
            return res.json({err:err});
        }
        else{
            return res.json({err:err,orderList:orderList});
        }
    });
};

exports.insertOrder = function (req, res, next) {
    // 使用snowflake生成唯一id
    let snowflake = require('node-snowflake').Snowflake;// use default set
    let orderID = snowflake.nextId().substring(0,10);
    let isbn = req.body.isbn;
    let perchaseNum = req.body.perchaseNum;
    let customerName = req.body.customerName;
    let customerPhone = req.body.customerPhone;
    let customerAddr = req.body.customerAddr;
    OrderProxy.insertOrder(orderID, isbn, perchaseNum, customerName, customerPhone, customerAddr,function (err,orderList) {
        if(err){
            return res.json({err:err});
        }
        else{
            return res.json({err:null,orderID: orderID});
        }
    });
};

exports.deleteOrder = function (req, res, next) {
    let orderID = req.body.orderID;
    //database
    OrderProxy.deleteOrder(orderID,function (err) {
        if(err){
            return res.json({err:err});
        }
        else{
            return res.json({err:null});
        }
    });
};

exports.updateOrder = function (req, res, next) {
    let orderID = req.body.orderID;
    let state = req.body.state;

    //database
    OrderProxy.updateOrder(state,orderID,function (err) {
        if(err){
            return res.json({err:err});
        }
        else{
            return res.json({err:null});
        }
    });
};
