import { Association, HumanResource, ServiceDepartment } from './composite';

test('get mutiDepth association',()=>{

    const root= new Association('root');
    const humanResource1 = new HumanResource('human-1');
    const service1 = new ServiceDepartment('service-1');
    root.add(humanResource1);
    root.add(service1);

    expect(root.lineOfDuty()).toBe(' recruit new member provide service');

    expect(root.getAllBranchDepth()).toStrictEqual([1,1]);

    root.remove(service1);
    expect(root.getAllBranchDepth()).toStrictEqual([1]);

    expect(humanResource1.add(service1)).toBe('service-1 can not be added');
    expect(humanResource1.remove(service1)).toBe('service-1 can not be removed');
    expect(service1.lineOfDuty()).toBe('provide service');

    const humanResource2 = new HumanResource('human-2');
    const service2 = new ServiceDepartment('service-2');
    root.add(humanResource2);
    root.add(service2);
    expect(root.getAllBranchDepth()).toStrictEqual([1,1,1]);

});