import {ProtoTypeShallowCopy,ProtoTypeDeepCopy} from './prototype';

test('prototype for shallow copy',()=>{
    const proto1 = new ProtoTypeShallowCopy([1,2,3,4]);
    const proto2 = proto1.clone();
    proto2.field[0] = 111;
    expect(proto1.field[0]).toBe(proto2.field[0]);
    expect(proto1.field[0]).toBe(111);
    expect(proto2.field[0]).toBe(111);
});

test('prototype for deep copy',()=>{
    const proto1 = new ProtoTypeDeepCopy([1,2,3,4]);
    const proto2 = proto1.clone();
    proto2.field[0] = 111;
    expect(proto1.field[0]).not.toEqual(proto2.field[0]);
    expect(proto1.field[0]).toBe(1);
    expect(proto2.field[0]).toBe(111);
});