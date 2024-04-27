const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shape");
const fs = require("fs");

class SVG{
    constructor(){
  this.version = "1.1";
  this.width = "300";
  this.height = "200";
  this.xmlns = "https://www.w3.org/2000/svg";
    }
    
    render(){
      return `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">`
    }
  }

const questions = () => inquirer.prompt([

  {
  type: "input",
  name: "text",
  message: "Please enter up to 3 characters:"
  },

  {
    type: "list",
    name: "shape",
    mesage: "choose which shape you would like for your SVG:",
    choices: ["Circle", "Triangle", "Square"]
  },

  {
    type: "input",
    name: "shapeColor",
    message: "Please enter the shape-color you would like for your SVG:"
  },

  {
    type: "input",
    name: "textColor",
    message: "Please enter the color you would like for your text: "
  }

])

.then(({text, shape, shapeColor, textColor}) => {
  const SVG = new SVG()
    switch(shape){
      case 'Circle':
        shape = new Circle(shapeColor)
      break
      case 'Square':
        shape = new Square(shapeColor)
      break
      case 'Triangle':
        shape = new Triangle(shapeColor)
      break
      default:
        console.log("invalid shape selcection")
    }
  const result = `${SVG.render()}
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`

  return(result) 
}
  )

  function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
      console.log(err);
      console.log("generate logo.svg")
    })
  }

  function init() {
    questions().then((responses) => {
      writeToFile("logo.svg", responses)
    });
  }

init()