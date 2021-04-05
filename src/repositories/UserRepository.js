const { User } = require("../domain/User");

class UserRepository {
  /**
   * 取得する
   * @param {number} id
   * @returns {User} ユーザー
   */
  find(id) {
    // return "hello";
    return new User("taro");
  }
}

module.exports = {
  UserRepository,
};
