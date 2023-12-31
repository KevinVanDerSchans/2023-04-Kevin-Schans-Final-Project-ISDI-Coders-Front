import { UserRepository } from "./user.repository";

describe("UserRepository", () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository("https://kevin-schans-alexandmelanie.com/");
  });

  describe("When calling the register method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        userName: "Erik",
        email: "erikvdsd@hotmail.com",
        password: "12345",
      };

      const expectedUrl = "https://kevin-schans-alexandmelanie.com/user/register";
      const mockResponse = {
        id: "1",
        userName: "Erik",
        email: "erikvdsd@hotmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const registeredUser = await userRepository.register(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(registeredUser).toEqual(mockResponse);
    });
  });

  describe("When calling the login method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        email: "erikvdsd@hotmail.com",
        password: "12345",
      };

      const expectedUrl = "https://kevin-schans-alexandmelanie.com/user/login";
      const mockResponse = {
        id: "1",
        userName: "Erik",
        email: "erikvdsd@hotmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const loggedInUser = await userRepository.login(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(loggedInUser).toEqual(mockResponse);
    });

    test("Then it should throw an error if the fetch doesn't work", async () => {
      const user = {
        email: "erikvdsd@hotmail.com",
        password: "12345",
      };
      const error = new Error("Login Error");

      const expectedUrl = "https://kevin-schans-alexandmelanie.com/user/login";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Login Error",
      });

      await expect(userRepository.login(user)).rejects.toThrow(error);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
    });
  });
});
