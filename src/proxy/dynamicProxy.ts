interface GameDisplay {
  display(): string;
}

class RealGameDisplay implements GameDisplay {
  display(): string {
    return this.constructor.name;
  }
}

class DynamicProxy implements GameDisplay {
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

export { RealGameDisplay, DynamicProxy };
