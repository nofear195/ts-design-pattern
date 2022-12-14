import { SingletonGreed, Singleton } from './singleton';

const s1 = Singleton.getInstance()


  const s2 =Singleton.getInstance()



  const s3 = SingletonGreed.getInstance()
  const s4 = SingletonGreed.getInstance()

  console.log(s3 === s4)
  console.log(s1 !== undefined)