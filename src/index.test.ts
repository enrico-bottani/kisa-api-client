import {User} from "./model/User";

test('get exercise', () => {
    let user = new User("Enrico");
    return expect(user.name).toBe("Enrico");
});