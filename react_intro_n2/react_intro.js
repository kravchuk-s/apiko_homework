 const React = {
    createElement(tag, attrb, input) {
      let out;
      if (!(/\s/.test(tag))) {
       out = document.createElement(tag);
        if (Array.isArray(input)) {
          input.forEach((element) => {
            if (!(element.nodeType)) {
              out.innerHTML += element;
            } else {
              out.appendChild(element);
            }
          })
        } else if (typeof input === 'string') {
          out.textContent = input;
        }

        if (typeof attrb === 'object') {
        const keys = Object.keys(attrb);
        for (key in attrb) {
          if (keys == 'style') {
            for (var key in attrb.style) {
              out.style[key] = attrb.style[key];
            }
          } else {
            out[key] = attrb[key];
          }
        }
      }
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