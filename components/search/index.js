var createElement = require('../../helpers/index.js').createElement;
require('./styles.css');

var getMicronSearch = function(theme) {
  var theme;

  if (!theme || theme !== 'light' || theme !== 'dark') {
    theme = 'light';
  }

  var searchContainer = createElement({
    class: theme + ' search-container',
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

  var activeBackground = createElement({
    class: 'active-background',
  });

  searchContainer.appendChild(glassHolder);
  searchContainer.appendChild(searchContainerLeft);
  searchContainer.appendChild(inputSearch);
  searchClean.appendChild(searchCleanButton);
  searchContainer.appendChild(searchClean);
  searchContainer.appendChild(searchContainerRight);
  searchContainer.appendChild(activeBackground);

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
