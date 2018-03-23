 const React = {

  createElement(tag, style, input) {
    let output = '';
    let inputOne = '';

    if (Array.isArray(input)){
        input.forEach((element) => {          
          inputOne += element;
        }
          );
      
    } else {
        inputOne = input;
    }

    switch(tag) {
      case 'div':
      output = `<div>${inputOne}</div>`
      break;
      case 'br':
      output = `<br>`;
      break;
      case 'span':
      output = `<span>${inputOne}</span>`;
      break;
      default:
      output = tag;
    }
   
    return output;
  },
  render(app, element) {
    element.innerHTML = app;
  }
 }

const kol = React.createElement('div', undefined,
 [React.createElement('br'), React.createElement('span',undefined,'some text')]);

 // const app = React.createElement('div', {  style: {    backgroundColor: 'red'  } },
 //  [React.createElement('some text'), React.createElement('some text')]);

 React.render(kol, document.getElementById('root'), );



  // if (Array.isArray(input)) {
  //     input.forEach((element) => {
  //       output += chooseTag(elementTag, element);
  //     });
  //   } else {
  //     output = chooseTag(elementTag, input)
  //   }

  //   function chooseTag(tag, elementInput) {
  //     let out = '';
  //     switch (tag) {
  //       case 'div':
  //         out = `<div>${elementInput}</div>`
  //         break;
  //       default:
  //         out = elementInput;
  //     }
  //     return out;
  //   }