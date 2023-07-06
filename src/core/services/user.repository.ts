import { User } from "../../features/models/user";
import { loginResponse } from "../../features/types/api.response";

export class UserRepository {
  constructor(public url: string) {}

  async register(item: Partial<User>): Promise<User> {
    const response = await fetch(this.url + "user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });

    return response.json() as Promise<User>;
  }

  async login(item: Partial<User>): Promise<loginResponse> {
    const response = await fetch(this.url + "user/login", {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Login Error");
    return response.json() as Promise<loginResponse>;
  }
}
