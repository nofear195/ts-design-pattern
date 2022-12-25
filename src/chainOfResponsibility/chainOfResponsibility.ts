// request

class ApplyRequest {
  private requestType: string;
  private requestContent: string;
  private requestCount: number;

  getRequestType(): string {
    return this.requestType;
  }

  setRequestType(requestType: string): void {
    this.requestType = requestType;
  }

  getRequestContent(): string {
    return this.requestContent;
  }

  setRequestContent(requestContent: string): void {
    this.requestContent = requestContent;
  }

  getRequestCount(): number {
    return this.requestCount;
  }

  setRequestCount(requestCount: number): void {
    this.requestCount = requestCount;
  }
}

// handler

abstract class Manager {
  protected name: string;
  protected superior: Manager;
  constructor(name: string) {
    this.name = name;
  }
  setSuperior(superior: Manager) {
    this.superior = superior;
  }

  abstract apply(request: ApplyRequest): string;
}

// concrete handler

class CommonManager extends Manager {
  constructor(name: string) {
    super(name);
  }
  apply(request: ApplyRequest): string {
    if (
      request.getRequestType() === "leave" &&
      request.getRequestCount() <= 2
    ) {
      return `${request.getRequestCount()} days of ${request.getRequestType()} ${request.getRequestContent()} approved`;
    } else {
      if (this.superior !== undefined) return this.superior.apply(request);
    }
  }
}

class Majordomo extends Manager {
  constructor(name: string) {
    super(name);
  }

  apply(request: ApplyRequest): string {
    if (
      request.getRequestType() === "leave" &&
      request.getRequestCount() <= 5
    ) {
      return `${request.getRequestContent()} is approved by ${this.name}`;
    } else {
      if (this.superior !== undefined) return this.superior.apply(request);
    }
  }
}

class GeneralManager extends Manager {
  constructor(name: string) {
    super(name);
  }

  apply(request: ApplyRequest): string {
    if (request.getRequestType() === "leave") {
      return `Everything is approved by ${this.name}`;
    } else {
      if (request.getRequestCount() <= 100) {
        return "accept";
      } else {
        return "reject";
      }
    }
  }
}

export { ApplyRequest, CommonManager, Majordomo, GeneralManager };
