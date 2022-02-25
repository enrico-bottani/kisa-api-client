import {User} from "./model/User";

class KISAClientBuilder {
    mocked:boolean;
    constructor() {
        this.mocked = false;
    }
}

class KISAClient {
    static builder(): KISAClientBuilder {
        return new KISAClientBuilder();
    }

    static getVersion() {
        new User("Test");
        console.log("v.0.0.3-snapshot")
    }
}