const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("render a white", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="white" />';
    const circle = new Circle();
    circle.setColor("white");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("render black polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="black" />';
    const triangle = new Triangle();
    triangle.setColor("black");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("render red polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
