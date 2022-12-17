interface Adventurer {
  attack(): string;
}

class Archer implements Adventurer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  attack(): string {
    return `attack by ${this.name}`;
  }
}

abstract class Title implements Adventurer {
  protected adventurer: Adventurer;

  constructor(adventurer: Adventurer) {
    this.adventurer = adventurer;
  }
  attack(): string {
    return this.adventurer.attack();
  }
}

class TitleStrong extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  attack(): string {
    return `strong ${super.attack()}`;
  }
}

class TitleAgile extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  attack(): string {
    return `agile ${super.attack()}`;
  }

  useFlash(): string {
    return "use flash";
  }
}

class TitleInfire extends Title {
  constructor(adventurer: Adventurer) {
    super(adventurer);
  }

  attack(): string {
    return `infire ${super.attack()}`;
  }

  usefireball(): string {
    return "use fireball";
  }
}

export { Archer, TitleStrong, TitleAgile, TitleInfire };
