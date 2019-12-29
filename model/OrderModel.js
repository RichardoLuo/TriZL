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
	 * @param orderID
	 * @param ISBN
	 * @param perchaseNum
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
	 * @param id
	 * @returns {string}
	 */
	function deleteOrder(id) {
		return "DELETE FROM Orders WHERE OrderID = {0}".format(id);
	}

	/**
	 * 更新订单运输状态
	 * @param state
	 * @param id
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