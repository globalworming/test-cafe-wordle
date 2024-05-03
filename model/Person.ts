export default class Person {
    userName: string
    password: string
    email: string


    constructor() {
        // random base 36 id
        const id = Math.floor(parseInt('zzzzzzzzz',36)*Math.random()).toString(36);
        this.userName = id
        this.password = id + "A1!"
        this.email = `${id}@example.com`
    }
}

