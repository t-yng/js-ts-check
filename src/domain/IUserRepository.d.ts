import { User } from "./User";

export interface IUserRepository {
  find(id: number): User;
}
