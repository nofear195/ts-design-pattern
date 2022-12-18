abstract class Adventurer {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getTask(task: string): string;
}

abstract class Subject {
  protected list: Adventurer[] = [];

  add(observer: Adventurer): void {
    this.list.push(observer);
  }

  remove(observer: Adventurer): void {
    this.list = this.list.filter((item) => item !== observer);
  }

  abstract sendTask(task: string): string[];

  getAdventurerNumber(): number {
    return this.list.length;
  }
}

class Association extends Subject {
  sendTask(task: string): string[] {
    const taskResult: string[] = [];
    this.list.forEach((item) => taskResult.push(item.getTask(task)));
    return taskResult;
  }
}

class Archer extends Adventurer {
  constructor(name: string) {
    super(name);
  }
  getTask(task: string): string {
    return `${this.name} get ${task}`;
  }
}

class Warrior extends Adventurer {
  constructor(name: string) {
    super(name);
  }
  getTask(task: string): string {
    if (task.includes("hard")) return "reject";
    return `${this.name} get ${task}`;
  }
}

class Magician extends Adventurer {
  constructor(name: string) {
    super(name);
  }
  getTask(task: string): string {
    if (task.includes("easy")) return "reject";
    return `${this.name} get ${task}`;
  }
}

export { Association, Archer, Warrior, Magician };
