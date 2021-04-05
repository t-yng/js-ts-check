/**
 * @typedef {import('../domain/IUserRepository').IUserRepository} IUserRepository
 */

class FindUserUseCase {
  /**
   *
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
