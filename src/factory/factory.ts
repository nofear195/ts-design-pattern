interface Adventurer {
  getType(): string;
}

class Archer implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

class Warrior implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

class ArcherTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    return new Archer();
  }
}

class WarriorTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    return new Warrior();
  }
}

export { ArcherTrainingCamp, WarriorTrainingCamp };
