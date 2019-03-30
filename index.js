// module.exports.tiny = function tiny(string) {
//   if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//   return string.replace(/\s/g, "");
// };
require('./styles.css');

function createElement(props) {
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

function getMicronSearch() {
  var searchContainer = createElement({
    class: 'search-container',
    id: 'micron-search',
  });

  var inputSearch = createElement({
    type: 'input',
    inputType: 'search',
    class: 'input-field',
    placeholder: 'Search',
  });

  var glassHolder = createElement({
    class: 'glass-holder',
  });

  var searchContainerLeft = createElement({
    class: 'search-container-left',
  });

  var searchContainerRight = createElement({
    class: 'search-container-right',
  });

  searchContainer.appendChild(glassHolder);
  searchContainer.appendChild(searchContainerLeft);
  searchContainer.appendChild(inputSearch);
  searchContainer.appendChild(searchContainerRight);

  function openSearch() {
    searchContainer.classList.add('open');
    inputSearch.focus();
    inputSearch.addEventListener('blur', closeSearch);
  }

  function closeSearch(e) {
    searchContainer.classList.remove('open');
    e.target.removeEventListener('blur', closeSearch);
  }

  searchContainer.addEventListener('click', openSearch);

  return searchContainer;
}

var micron = (function() {
  var inputSearchCollection = [];

  inputSearchCollection = [... document.querySelectorAll('[data-micron="search"]')];

  inputSearchCollection.forEach(function(input) {
    input.appendChild(getMicronSearch());
  });
})();

// module.export micron = micron;
