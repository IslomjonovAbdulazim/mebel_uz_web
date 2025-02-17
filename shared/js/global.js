// shared/js/global.js

/**
 * Safely get a URL query parameter by name.
 */
export function getUrlParam(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
  }
  
  /**
   * Create a DOM element from an HTML string.
   */
  export function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }
  