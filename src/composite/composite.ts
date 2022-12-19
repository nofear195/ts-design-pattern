// component
abstract class AbstractAssociation {
  protected name: string;
  protected depth: number;
  constructor(name: string) {
    this.name = name;
    this.depth = 0;
  }
  abstract add(a: AbstractAssociation): void;
  abstract remove(a: AbstractAssociation): void;
  setDepth(depth: number): void {
    this.depth = depth;
  }
  getDepth(): number {
    return this.depth;
  }
  getName(): string {
    return this.name;
  }

  abstract lineOfDuty(): string;
}

// composite

class Association extends AbstractAssociation {
  branchs: AbstractAssociation[] = [];

  constructor(name: string) {
    super(name);
  }

  add(a: AbstractAssociation): void {
    a.setDepth(a.getDepth() + this.depth + 1);
    this.branchs.push(a);
  }

  remove(a: AbstractAssociation): void {
    this.branchs = this.branchs.filter(
      (item) => item.getName() !== a.getName()
    );
  }

  lineOfDuty(): string {
    let result = "";
    this.branchs.forEach((item) => {
      result = result + " " + item.lineOfDuty();
    });
    return result;
  }

  getAllBranchDepth(): number[] {
    const depths: number[] = [];
    this.branchs.forEach((branch) => depths.push(branch.getDepth()));
    return depths;
  }
}

// leaf

abstract class Department extends AbstractAssociation {
  constructor(name: string) {
    super(name);
  }

  add(a: AbstractAssociation): string {
    return `${a.getName()} can not be added`;
  }

  remove(a: AbstractAssociation): string {
    return `${a.getName()} can not be removed`;
  }

  abstract lineOfDuty(): string;
}

class HumanResource extends Department {
  constructor(name: string) {
    super(name);
  }
  lineOfDuty(): string {
    return "recruit new member";
  }
}

class ServiceDepartment extends Department {
  constructor(name: string) {
    super(name);
  }
  lineOfDuty(): string {
    return "provide service";
  }
}

export { Association, HumanResource, ServiceDepartment };
