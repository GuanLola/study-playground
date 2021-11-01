(() => {
  // 布尔值
  let isDone: boolean = false;
  isDone = true;
  // isDone = 2 // error

  // 数字
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制

  // 字符串
  let name: string = 'tom'
  name = 'jack'
  // name = 12 // error
  let age: number = 12
  const info = `My name is ${name}, I am ${age} years old!`

  //undefined 和 null
  let u: undefined = undefined
  let n: null = null

  // 数组
  let list1: number[] = [1, 2, 3]
  let list2: Array<number> = [1, 2, 3]

  // 元组 Tuple
  let t1: [string, number]
  t1 = ['hello', 10] // OK
  // t1 = [10, 'hello'] // Error
  console.log(t1[0].substring(1)) // OK
  // console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法

  // 枚举
  // enum Color {
  //   Red,
  //   Green,
  //   Blue
  // }
  // let myColor: Color = Color.Green  // 1
  // console.log(myColor, Color.Red, Color.Blue)

  enum Color {Red = 1, Green = 2, Blue = 4}
  let c: Color = Color.Green
  console.log(c)
  let colorName: string = Color[2]
  console.log(colorName)

  // any
  let notSure: any = 4
  notSure = 'maybe a sting'
  notSure = false

  let list: any[] = [1, true, 'free']
  list[1] = 100
  console.log(list)
  list[1] = false
  console.log(list)

  // void
  function fn(): void {
    console.log('fn(')
  }

  let unusable: void
  console.log(unusable)

  // object
  function fn2(obj: object):object {
    return obj
  }

  console.log(fn2(new String('abc')))
  console.log(fn2({ name: 'lola' }))
  // console.log(fn2('lola'))

  // 联合类型
  function toString2(x: number | string): string {
    return x.toString()
  }
  // 类型断言 如果当前参数是两个类型 判断不能用typeof 
  function getLength(x: number | string) {
    // if ((<string>x).length) {
    if ((x as string).length) {
      // return (<string>x).length
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength(2344))

  // 类型推断
  let b9 = 123
  // b9 = 'a'

  let b10
  b10 = 123
  b10 = 'aaa'

})()