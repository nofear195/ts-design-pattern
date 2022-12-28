interface IProtoType {
  clone(): this;
}

class ProtoTypeShallowCopy implements IProtoType {
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone(): this {
    return Object.assign({}, this);
  }
}

class ProtoTypeDeepCopy implements IProtoType {
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone(): this {
    return JSON.parse(JSON.stringify(this));
  }
}

export { ProtoTypeShallowCopy, ProtoTypeDeepCopy };
