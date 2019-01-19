(_ => {
  const containerSelectors = [
    '.tasty-recipes',
    '.wprm-recipe-container', 
    '[id*=mpprecipe-container]', 
    '[id*=zlrecipe-container]', 
    '.recipe-inner', 
    '.recipe-callout'
  ];
  document.body.innerHTML = document.querySelector(containerSelectors.join(',')).outerHTML;
  requestAnimationFrame(_ => {
    Array.from(document.querySelectorAll('iframe')).forEach(iframe => iframe.remove());
  });
})();
