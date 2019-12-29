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
	 * @param OrderID
	 * @param ISBN
	 * @param PerchaseNum
	 * @param CustomerName
	 * @param CustomerPhone
	 * @param CustomerAddr
	 * @returns {string}
	 */
	function insertOrder(OrderID, ISBN, PerchaseNum, CustomerName, CustomerPhone, CustomerAddr) {
		return "INSERT INTO Orders  (OrderID, OrderTime, ISBN, PerchaseNum, CustomerName, CustomerPhone, CustomerAddr, OrderStatus)  VALUES  ({0}, GETDATE(), {1}, {2}, {3}, {4}, {5}, 0);".format(OrderID, ISBN, PerchaseNum, CustomerName, CustomerPhone, CustomerAddr);
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