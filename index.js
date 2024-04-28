const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shape");
const fs = require("fs");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt'); //add on in the inquirer package to set max length of input


inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const questions = () => inquirer.prompt([

  {
  type: "maxlength-input", //sets max length
  name: "text",
  message: "Please enter up to 3 characters:",
  maxLength: 3  //max length set to three
  },

  {
    type: "list",
    name: "shape",
    mesage: "choose which shape you would like for your SVG:",
    choices: ["Circle", "Triangle", "Square"]
  },

  {
    type: "input",
    name: "shapeColor",  //sets background of image color
    message: "Please enter the shape-color you would like for your SVG:"
  },

  {
    type: "input",
    name: "textColor",
    message: "Please enter the color you would like for your text: "
  }

])

.then(({text, shape, shapeColor, textColor}) => {
 
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
  const result = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`

  return(result) 
}
  )

  function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
  
  }

  function init() {
    questions().then((responses) => {
      console.log("generate logo.svg")
      writeToFile("logo.svg", responses)
    });
  }

init()