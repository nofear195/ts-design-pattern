abstract class Adventurer {
  protected level: number;

  getLevel(): number {
    return this.level;
  }
  setLevel(level: number) {
    this.level = level;
  }
}

class Archer extends Adventurer {
  constructor() {
    super();
    super.level = 1;
  }
}

abstract class MazeTemplate {
  protected difficulty: number;
  protected adventurer: Adventurer;
  protected hook = false;

  adventure(adventurer: Adventurer): Adventurer {
    this.adventurer = adventurer;
    const level = this.adventurer.getLevel();

    if (this.checkLevel(level)) {
      this.createMaze();
      this.start();
      if (this.hook) this.hiddenMaze();
      this.levelUp();
    }

    return this.adventurer;
  }

  // check adventurer's level is enough
  checkLevel(level: number): boolean {
    return level < this.difficulty ? false : true;
  }

  abstract createMaze(): string;
  abstract start(): string;

  // hide easy maze and enter difficult maze
  hiddenMaze(): void {
    // return 'hide easy maze and enter difficult maze';
  }

  levelUp(): void {
    this.adventurer.setLevel(this.adventurer.getLevel() + 50);
  }
}

class EasyMaze extends MazeTemplate {
  constructor() {
    super();
    super.difficulty = 1;
  }

  createMaze(): string {
    return "simple maze created";
  }

  start(): string {
    return "start simple maze";
  }
}

class DifficultMaze extends MazeTemplate {
  constructor() {
    super();
    super.difficulty = 50;
    super.hook = true;
  }
  createMaze(): string {
    return "difficult maze created";
  }

  start(): string {
    return "start difficult maze";
  }
}

export { Archer, EasyMaze, DifficultMaze };
