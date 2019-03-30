var createElement = require('../../helpers/index.js').createElement;
require('./styles.css');

var getMicronSearch = function() {
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
};

module.exports = getMicronSearch;
