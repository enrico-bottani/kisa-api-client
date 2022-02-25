import KUser from "./model/User";


export namespace KISAClient {

    export class Version {
        printVersion() {
            console.log("v.0.0.2-snapshot")
        }
    }
    export type User = KUser;
}
