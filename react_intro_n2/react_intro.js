 const React = {
    createElement(elementTag, style, input) {
      let output = '';
      // let toText = JSON.stringify(style.style).replace(/[^a-zA-Z :]/g, "").toLowerCase();
      // console.log(style.style);
      // console.log(toText);
      if (Array.isArray(input)) {
        input.forEach((element) => {
            console.log("here 1" + output);
            // switch(elementTag) {
            //   case 'div':
            //     output += `<div>${element}</div>`
            //     console.log("here 2" + output);
            //     break;   
            //   default:
            //   output = elementTag;  
            output += chooseTag(elementTag, element);
          });
        
    } else {
      output = chooseTag(elementTag, input)
    }

    function chooseTag(tag, elementInput) {
      let out = '';
      switch (tag) {
        case 'div':
          out = `<div>${elementInput}</div>`
          console.log("here 2" + out);
          break;
        default:
          out = elementTag;
      }
      return out;
    }
    console.log("here 3" + output);
    return output;
  },
  render(app, element) {
    element.innerHTML = app;
  }
 }
 const app = React.createElement('div', {
  style: {
    backgroundColor: 'red'
  }
 }, [React.createElement('some text'), React.createElement('some text')]);
 // const app = 
 // React.createElement('div', { style: { backgroundColor: 'red' } }, [
 //   React.createElement('span', undefined, 'Hello world'),
 //   React.createElement('br'),
 //   'This is just a text node',
 //   React.createElement('div', { textContent: 'Text content' }),
 //   ]);
 React.render(app, document.getElementById('root'), );