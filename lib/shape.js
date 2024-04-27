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
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`
  }
}

class Square {
  constructor(color){
    this.color = color;
  }
  render(){
    return `<rect width="200" height="200" x="10" y="10" fill="${this.color}"/>`
  }
}







module.exports = {Circle, Square, Triangle}