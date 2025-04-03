
console.log("\n ------ ES6에서 클래스 사용 -----\n");
// ES6에서는 class 키워드 사용, 자바의 클래스와 비슷
class Shape {
  // 정적멤버 선언
  static create(x, y) {
    return new Shape(x, y);
  }

  // 클래스의 필드 선언
  name = 'shape';

  // 생성자
  constructor(x, y) {
    this.move(x, y);
  }

  // 메소드 선언
  move(x, y) {
    // 클래스의 필드 선언 및 데이터 저장
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

// 객체 생성 방식도 자바와 비슷함
var s = new Shape(10, 20);
console.log(s.area());
s.move(100, 200);
console.log(s.area());
console.log(s.name);


console.log("\n----- ES6의 클래스 상속 -----\n");

// extends 키워드를 사용하여 클래스 상속 가능
class Circle extends Shape {

  // Circle 클래스의 생성자
  constructor(x, y, radius) {
    // 자바에서의 super() 와 동일한 기능
    // 상속받은 부모 클래스의 생성자 호출
    super(x, y);
    // 필드 radius 생성 및 데이터 저장
    this.radius = radius;
  }

  // 부모 클래스의 멤버 메소드인 area()를 상속받아 오버라이딩하여 사용
  area() {
    if (this.radius === 0) {
      return super.area();
    }

    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
console.log(c.area());









