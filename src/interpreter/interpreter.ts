// context

class Context {
  private text: string;

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }
}

// expression

abstract class Expression {
  interpret(str: string): number[] {
    if (str.length > 0) {
      const text = str.substring(1, str.length);
      const exeResult = this.execute(text);
      return exeResult;
    }
  }
  protected abstract execute(text: string): number[];
}

// concrete expression

class UpExpression extends Expression {
  execute(text: string): number[] {
    const result: number[] = [];
    for (let i = 0; i < text.length; i++) {
      const tmp = Number(text[i]);
      if (!isNaN(tmp)) {
        result.push(tmp * 2);
      } else {
        result.push(0);
      }
    }
    return result;
  }
}

class DownExpression extends Expression {
  execute(text: string): number[] {
    const result: number[] = [];
    for (let i = 0; i < text.length; i++) {
      const tmp = Number(text[i]);
      if (!isNaN(tmp)) {
        result.push(tmp / 2);
      } else {
        result.push(0);
      }
    }
    return result;
  }
}

export { Context, Expression, UpExpression, DownExpression };
