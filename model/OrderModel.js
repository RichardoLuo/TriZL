/**
 * 构造order 对象
 * @param orderID
 * @param orderTime
 * @param ISBN
 * @param perchaseNum
 * @param customerName
 * @param customerPhone
 * @param customerAddr
 * @param orderStatus
 * @returns {{perchaseNum: *, customerPhone: *, orderTime: *, ISBN: *, orderID: *, orderStatus: *, customerName: *, customerAddr: *}}
 */
exports.build = function(orderID, orderTime, ISBN, perchaseNum, customerName, customerPhone, customerAddr,orderStatus){
	return{
		orderID: orderID,
		orderTime: orderTime,
		ISBN: ISBN,
		perchaseNum: perchaseNum,
		customerName: customerName,
		customerPhone: customerPhone,
		customerAddr: customerAddr,
		orderStatus: orderStatus,
	}
};

/**
 * 转换
 * @param orderTuple
 * @returns {{perchaseNum: *, customerPhone: *, orderTime: *, ISBN: *, orderID: *, orderStatus: *, customerName: *, customerAddr: *}}
 */
exports.change = function(orderTuple){
	return{
		orderID: orderTuple.OrderID,
		orderTime: orderTuple.OrderTime,
		ISBN: orderTuple.ISBN,
		perchaseNum: orderTuple.PerchaseNum,
		customerName: orderTuple.CustomerName,
		customerPhone: orderTuple.CustomerPhone,
		customerAddr: orderTuple.CustomerAddr,
		orderStatus: orderTuple.OrderStatus,
	}
};

exports.sql = function () {
	/**
	 * 按订单号查询订单所有信息
	 * @param id
	 * @returns {string}
	 */
	function selectOrder(id) {
		return "SELECT * FROM Orders WHERE OrderID = {0}".format(id);
	}

	/**
	 * 新建订单
	 * @param orderID int
	 * @param ISBN
	 * @param perchaseNum int
	 * @param customerName
	 * @param customerPhone
	 * @param customerAddr
	 * @returns {string}
	 */
	function insertOrder(orderID, ISBN, perchaseNum, customerName, customerPhone, customerAddr) {
		return "INSERT INTO Orders  (OrderID, OrderTime, ISBN, PerchaseNum, CustomerName, CustomerPhone, CustomerAddr, OrderStatus)  VALUES  ({0}, GETDATE(), {1}, {2}, {3}, {4}, {5}, 0);".format(orderID, ISBN, perchaseNum, customerName, customerPhone, customerAddr);
	}

	/**
	 * 按订单号删除订单
	 * @param id int
	 * @returns {string}
	 */
	function deleteOrder(id) {
		return "DELETE FROM Orders WHERE OrderID = {0}".format(id);
	}

	/**
	 * 更新订单运输状态
	 * @param state enum
	 * @param id int
	 * @returns {string}
	 */
	function updateOrder(state,id) {
		return "UPDATE Orders SET  OrderState = {0} WHERE  (OrderID = {1})".format(state,id);
	}
	
	return{
		selectOrder: selectOrder,
		insertOrder: insertOrder,
		deleteOrder: deleteOrder,
		updateOrder: updateOrder
	}
}