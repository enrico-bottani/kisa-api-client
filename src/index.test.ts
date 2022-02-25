import { User } from "./index";
test('get exercise', () => {
    let user = new User("Enrico");
    return expect(user.name).toBe("Enrico");
});