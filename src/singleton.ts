class SingletonGreed {
    private static instance: SingletonGreed = new SingletonGreed();
    constructor() {
        console.log("init singletonGreed");
    }
    public static getInstance(): SingletonGreed {
        return this.instance;
    }
}

class Singleton {
    private static instance: Singleton;
    constructor() {
        console.log("init singleton");
    }
    public static getInstance(): Singleton {
        return Singleton.instance ? this.instance : new Singleton;
    }
}

export {SingletonGreed,Singleton}