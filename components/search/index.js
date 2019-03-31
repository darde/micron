var createElement = require('../../helpers/index.js').createElement;
require('./styles.css');

var getMicronSearch = function() {
  var searchContainer = createElement({
    class: 'search-container',
    id: 'micron-search',
  });

  var inputSearch = createElement({
    type: 'input',
    inputType: 'text',
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

  var searchClean = createElement({
    class: 'search-clean',
  });

  var searchCleanButton = createElement({
    type: 'button',
    id: 'clean-search-btn',
  });

  searchContainer.appendChild(glassHolder);
  searchContainer.appendChild(searchContainerLeft);
  searchContainer.appendChild(inputSearch);
  searchClean.appendChild(searchCleanButton);
  searchContainer.appendChild(searchClean);
  searchContainer.appendChild(searchContainerRight);

  function openSearch() {
    searchContainer.classList.add('open');
    inputSearch.focus();
    inputSearch.addEventListener('blur', closeSearch);
    searchCleanButton.addEventListener('mousedown', cleanSearch);
  }

  function closeSearch(e) {
    searchContainer.classList.remove('open');
    e.target.removeEventListener('blur', closeSearch);
    searchCleanButton.removeEventListener('click', cleanSearch);
  }

  function cleanSearch(e) {
    console.log(e.target.id);
    e.stopImmediatePropagation();
    inputSearch.removeEventListener('blur', closeSearch);
    inputSearch.value = '';
  }

  searchContainer.addEventListener('click', openSearch);

  return searchContainer;
};

module.exports = getMicronSearch;
