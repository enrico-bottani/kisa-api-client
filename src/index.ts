import _User from "./model/User";

export namespace KISAClient {

    export class Version {
        printVersion() {
            console.log("v.0.0.3-snapshot")
        }
    }
    export const User = _User;
}
