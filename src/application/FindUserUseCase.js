/**
 * @typedef {import('../domain/IUserRepository').IUserRepository} IUserRepository
 */

class FindUserUseCase {
  /**
   * constructor
   * @param {{
   *  userRepository: IUserRepository
   * }} arg
   */
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
}

module.exports = {
  FindUserUseCase,
};
