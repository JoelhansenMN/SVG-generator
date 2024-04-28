const shapes = require("./shape");

describe('testing all the shape objects', () => {
  it('should return an orange circle', () => {
    const circle = new shapes.Circle('orange');
  expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="orange"/>`)
  })
    

  it('should return a blue triangle', () => {
    const triangle = new shapes.Triangle('blue');
  expect(triangle.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="blue"/>`)
  })

  it('should return a green square', () => {
    const square = new shapes.Square('green');
  expect(square.render()).toEqual(`<rect width="200" height="200" x="10" y="10" fill="green"/>`)
  })
})