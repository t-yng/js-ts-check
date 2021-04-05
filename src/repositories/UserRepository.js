const { User } = require("../domain/User");

class UserRepository {
  /**
   * find user
   * @param {number} id
   * @returns {User} User
   */
  find(id) {
    return new User("taro");
  }
}

module.exports = {
  UserRepository,
};
