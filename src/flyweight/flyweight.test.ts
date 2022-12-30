import { Tree, TreeManager } from './flyweight';

test('manage tree owner',()=>{
    const rose:Tree = TreeManager.getTree('rose');
    rose.setOwner("Frank");
    
    expect(rose.display()).toBe('type:rose,owner:Frank');

    const jRose:Tree = TreeManager.getTree('rose');
    rose.setOwner("Jennifer");
    expect(jRose.display()).toBe('type:rose,owner:Jennifer');
});