class Circle {
  constructor(color){
    this.color = color;
  }
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
}

class Triangle {
  constructor(color){
    this.color = color;
  }
  render(){
    return ``
  }
}

class Square {
  constructor(color){
    this.color = color;
  }
  render(){
    return ``
  }
}







module.exports = {Circle, Square, Triangle}