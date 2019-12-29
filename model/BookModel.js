exports.sql = function () {
	/**
	 * 查询所有书的所有信息
	 * @returns {string}
	 */
	function selectBookAll() {
		return "SELECT * FROM Books";
	}

	/**
	 * 按ISBN查询书所有信息
	 * @param ISBN
	 * @returns {string}
	 */
	function selectBookISBN(ISBN) {
		return "SELECT * FROM Books WHERE ( ISBN = '{0}' )".format(ISBN);
	}

	/**
	 * 按书名查询书所有信息
	 * @param name
	 * @returns {string}
	 */
	function selectBookName(name) {
		return "SELECT * FROM Books WHERE ( Name LIKE ‘%{0}%’ )".format(name);
	}

	/**
	 * 按作者查询书所有信息
	 * @param author
	 * @returns {string}
	 */
	function selectBookAuthor(author) {
		return "SELECT * FROM Books WHERE ( Author LIKE ‘%@Author%’ )".format(author);
	}

	/**
	 * 新增书信息
	 * @param ISBN
	 * @param name
	 * @param author
	 * @param releasetime
	 * @param price
	 * @param repertory
	 * @param introduction
	 * @param picture
	 * @param solenum
	 * @returns {string}
	 */
	function insertBook(ISBN,name,author,releasetime,price,repertory,introduction,picture,solenum) {
		return "INSERT INTO Books (ISBN, Name, Author, ReleaseTime, Price, Repertory, Introduction, Picture, SoleNum, AddTime)  VALUES('{0}','{1}','{2}',{3},{4},{5},'{6}','{7}',{8}, GETDATE())".format(ISBN,name,author,releasetime,price,repertory,introduction,picture,solenum);
	}

	/**
	 * 按ISBN删除书信息
	 * @param isbn
	 * @returns {string}
	 */
	function deleteBook(isbn) {
		return "DELETE FROM Books WHERE ISBN = '{0}'".format(isbn);
	}

	/**
	 * 按ISBN更新书的信息
	 * @param name
	 * @param author
	 * @param releasetime
	 * @param price
	 * @param repertory
	 * @param introduction
	 * @param picture
	 * @param solenum
	 * @param addtime
	 * @param ISBN
	 * @returns {string}
	 */
	function updateBook(name,author,releasetime,price,repertory,introduction,picture,solenum,addtime,ISBN) {
		return "UPDATE  Books SET Name = '{0}', Author = '{1}', ReleaseTime = {2}, Price={3},  Repertory={4}, Introduction='{5}', Picture='{6}', SoleNum={7}, AddTime={8}	WHERE ISBN = '{9}'".format(name,author,releasetime,price,repertory,introduction,picture,solenum,addtime,ISBN);
	}

	return{
		selectBookAll: selectBookAll,
		selectBookISBN: selectBookISBN,
		selectBookName: selectBookName,
		selectBookAuthor: selectBookAuthor,
		insertBook: insertBook,
		deleteBook: deleteBook,
		updateBook: updateBook
	}
}