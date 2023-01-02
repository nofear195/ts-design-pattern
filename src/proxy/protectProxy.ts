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

class ProtectProxy implements Person {
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

export { PersonJack, ProtectProxy };
