// flyweight

class Tree {
  private type: string;
  private owner: string;

  constructor(type: string) {
    this.type = type;
  }

  setOwner(owner: string): void {
    this.owner = owner;
  }

  display(): string {
    return `type:${this.type},owner:${this.owner}`;
  }
}

// flyweight factory

class TreeManager {
  private static treePool: Map<string, Tree> = new Map();

  public static getTree(type: string): Tree {
    if (!this.treePool.has(type)) {
      this.treePool.set(type, new Tree(type));
    }
    return this.treePool.get(type);
  }
}

export { Tree, TreeManager };
