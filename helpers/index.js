var createElement = function (props) {
  if (!props.type) {
    props.type = 'div';
  }

  var element = document.createElement(props.type);

  if (props.inputType) {
    element.type = props.inputType;
  }

  if (props.class) {
    element.className = props.class;
  }

  if (props.id) {
    element.id = props.id;
  }

  if (props.placeholder) {
    element.placeholder = props.placeholder;
  }

  return element;
};

module.exports.createElement = createElement;
