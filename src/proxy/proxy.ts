// dynamic proxy

interface GameDisplay {
  display(): string;
}

class RealGameDisplay implements GameDisplay {
  display(): string {
    return this.constructor.name;
  }
}

class ProxyGameDisplay implements GameDisplay {
  private realGameDisplay: RealGameDisplay;

  constructor(realGameDisplay: RealGameDisplay) {
    this.realGameDisplay = realGameDisplay;
  }

  display(): string {
    let result = this.constructor.name; // first and wait for real display
    result = result + " " + this.realGameDisplay.display(); // run after real display is ready
    return result;
  }
}

// protect proxy

interface Person {
  setLikeCount(like: number): void;
  getLikeCount(): number;
  setName(name: string): void;
  getName(): string;
}

class PersonJack implements Person {
  private name: string;
  private likeCount: number;

  setLikeCount(like: number): void {
    this.likeCount = like;
  }

  getLikeCount(): number {
    return this.likeCount;
  }

  setName(name: string): void {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

class ProxyPersonJack implements Person {
  public person: PersonJack;

  constructor(person: PersonJack) {
    this.person = person;
  }

  setLikeCount(like: number): void {
    return;
  }

  getLikeCount(): number {
    return this.person.getLikeCount();
  }

  setName(name: string): void {
    this.person.setName(name);
  }
  getName(): string {
    return this.person.getName();
  }
}

export { RealGameDisplay, ProxyGameDisplay, PersonJack, ProxyPersonJack };
