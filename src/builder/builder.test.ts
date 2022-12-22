import { GundamBuilder, Director } from './builder';

test('create robot by director',()=>{
    const director:Director = new Director(new GundamBuilder());
    const robot = director.builderRobot();
    const display = robot.display();
    expect(display).toBe('Form: robot form; Weapon: weapon1,weapon2,weapon3; Power: main power sub power battery');
});