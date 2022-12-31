import {
  ChefGroup,
  SuperChef,
  DarkChef,
  VisitorTofu,
  VisitorNoodle,
} from "./visitor";

test('chef test',()=>{
    const chefGroup = new ChefGroup();
    chefGroup.join(new SuperChef('jennifer'));
    chefGroup.join(new DarkChef('frank'));

    const round1 = new VisitorTofu();
    let testResult = chefGroup.topic(round1);
    expect(testResult).toBe('jennifer: cook super tofu;frank: cook dark tofu;');

    const round2 = new VisitorNoodle();
    testResult = chefGroup.topic(round2);
    expect(testResult).toBe('jennifer: cook super noodle;frank: cook dark noodle;');

    chefGroup.leave('frank');
    testResult = chefGroup.topic(round2);
    expect(testResult).toBe('jennifer: cook super noodle;');
});