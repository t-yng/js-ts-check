const { UserRepository } = require("./repositories/UserRepository");
const { FindUserUseCase } = require("./application/FindUserUseCase");

const repository = new UserRepository();
const useCase = new FindUserUseCase({ userRepository: repository });
