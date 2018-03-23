  const React = {
  createElement(tag, attrb, input) {
    console.log("step 1");
    let out;
    switch (tag) {
      case 'span':
      case 'div':
        out = document.createElement(tag);
        console.log("step 2");
        if (Array.isArray(input)) {
          input.forEach((element) => {
            console.log("step 3 " + element);
            if (!(element.nodeType)) {
              out.innerHTML += element;
            } else {
              console.log("step 4");
              out.appendChild(element);
            }
          })
        } else {
          out.textContent = input;
        }
        break;
      case 'br':
        out = document.createElement(tag);
        console.log("step 5");
        break;
      default:
        console.log("step 6");
        out.textContent = tag;
    }

    function attributes() {
      const keys = Object.keys(attrb);
      switch (keys[0]) {
        case 'style':
          for (key in attrb.style) {
            out.style[key] = attrb.style[key];
          }
          break;
        case 'textContent':
          out.textContent = attrb.textContent;
          break;
      }
    }


    if (!(attrb === undefined)) {
      attributes();
    }

    
    return out;
  },
  render(app, element) {
    element.appendChild(app);
  }
 }

const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);

 React.render(app, document.getElementById('root'), );