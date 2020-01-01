/**
 * 创建一个book对象
 * @param isbn
 * @param name
 * @param author
 * @param releaseTime datetime
 * @param price float
 * @param repertory int
 * @param introduction
 * @param picture
 * @param soleNum int
 * @returns {{releaseTime: *, ISBN: *, author: *, price: *, soleNum: *, name: *, repertory: *, introduction: *, picture: *}}
 */
exports.build = function(isbn,name,author,releaseTime,price,repertory,introduction,picture,soleNum){
	return {
		isbn: isbn,
		name: name,
		author: author,
		releaseTime: releaseTime,
		price: price,
		repertory: repertory,
		introduction: introduction,
		picture: picture,
		soleNum: soleNum
	}
};

exports.change = function(bookTuple){
	return{
		isbn: bookTuple.ISBN,
		name: bookTuple.Name,
		author: bookTuple.Author,
		releaseTime: bookTuple.ReleaseTime,
		price: bookTuple.Price,
		repertory: bookTuple.Repertory,
		introduction: bookTuple.Introduction,
		picture: bookTuple.Picture,
		soleNum: bookTuple.SoleNum,
	}
};

exports.sql = function () {
	/**
	 * 查询所有书的所有信息
	 * @returns {string}
	 */
	function selectBookAll() {
		return "SELECT * FROM Books";
	}

	/**
	 * 按isbn查询书所有信息 非模糊查询 必须完全一样
	 * @param isbn
	 * @returns {string}
	 */
	function selectBookISBN(isbn) {
		return "SELECT * FROM Books WHERE ( ISBN = '{0}' )".format(isbn);
	}

	/**
	 * 按书名查询书所有信息 模糊查询
	 * @param name
	 * @returns {string}
	 */
	function selectBookName(name) {
		return "SELECT * FROM Books WHERE ( Name LIKE '%{0}%' )".format(name);
	}

	/**
	 * 按作者查询书所有信息
	 * @param author
	 * @returns {string}
	 */
	function selectBookAuthor(author) {
		return "SELECT * FROM Books WHERE ( Author LIKE '%{0}%' )".format(author);
	}

	/**
	 * 新增书信息
	 * @param isbn
	 * @param name
	 * @param author
	 * @param releaseTime datetime
	 * @param price float
	 * @param repertory int
	 * @param introduction
	 * @param picture
	 * @param soleNum int
	 * @returns {string}
	 */
	function insertBook(isbn,name,author,releaseTime,price,repertory,introduction,picture,soleNum) {
		return "INSERT INTO Books (ISBN, Name, Author, ReleaseTime, Price, Repertory, Introduction, Picture, SoleNum, AddTime)  VALUES('{0}','{1}','{2}','{3}',{4},{5},'{6}','{7}',{8}, NOW())".format(isbn,name,author,releaseTime,price,repertory,introduction,picture,soleNum);
	}

	/**
	 * 按isbn删除书信息
	 * @param isbn
	 * @returns {string}
	 */
	function deleteBook(isbn) {
		return "DELETE FROM Books WHERE ISBN = '{0}'".format(isbn);
	}

	/**
	 * 按isbn更新书的信息
	 * @param name
	 * @param author
	 * @param releaseTime datetime
	 * @param price float
	 * @param repertory int
	 * @param introduction
	 * @param picture
	 * @param soleNum int
	 * @param isbn
	 * @returns {string}
	 */
	function updateBook(name,author,releaseTime,price,repertory,introduction,picture,soleNum,isbn) {
		return "UPDATE  Books SET Name = '{0}', Author = '{1}', ReleaseTime = '{2}', Price={3},  Repertory={4}, Introduction='{5}', Picture='{6}', SoleNum={7} WHERE ISBN = '{8}'".format(name,author,releaseTime,price,repertory,introduction,picture,soleNum,isbn);
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
};