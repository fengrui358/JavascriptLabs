// 类型保护

enum Sharp {
  Rectangle,
  Circle,
  Triangle,
}

abstract class SharpBase {
  abstract kind: Sharp;
  abstract Area(): number;
}

class Rectangle extends SharpBase {
  kind = Sharp.Rectangle;
  width: number = 10;
  height: number = 20;
  Area(): number {
    return this.width * this.height;
  }
}

class Circle extends SharpBase {
  kind = Sharp.Circle;
  r: number = 10;
  Area(): number {
    return this.r ** 2 * Math.PI;
  }
}

// 1. 新增一种类型 Triangle
class Triangle extends SharpBase {
  kind = Sharp.Circle;
  width: number = 10;
  height: number = 20;
  Area(): number {
    return (this.width * this.height) / 2;
  }
}

// 2. 这种定义可能会遗漏新添加的类型
function getArea(shape: SharpBase) {
  switch (shape.kind) {
    case Sharp.Circle:
      return shape.Area();
    case Sharp.Rectangle:
      return shape.Area();
  }
}

// 确定返回值，保护不会遗漏新添加类型
function getArea2(shape: SharpBase): number {
  switch (shape.kind) {
    case Sharp.Circle:
      return shape.Area();
    case Sharp.Rectangle:
      return shape.Area();
    case Sharp.Triangle:
      return shape.Area();
  }
}

// 定义 default 不为 nerver 类型，保护不会遗漏新添加类型
function getArea3(shape: SharpBase) {
  switch (shape.kind) {
    case Sharp.Circle:
      return shape.Area();
    case Sharp.Rectangle:
      return shape.Area();
    case Sharp.Triangle:
      return shape.Area();
    // default:
    //   return ((e: never) => {
    //     throw new Error(e);
    //   })(shape);
  }
}
