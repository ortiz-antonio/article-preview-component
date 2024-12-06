"use strict";
// Get DOM elements with type safety
const socialShareMenu = document.getElementById('social-share');
const articleShare = document.getElementById('articleShare');
const menuTitle = document.getElementById('share');
let isMenuExpanded = false;
setDisplay();
const buttonShare = `
    <button
      class="article__share--button"
      aria-label="open share menu"
      aria-expanded="false"
      aria-controls="social-share"
      aria-haspopup="true"
    >
      <img alt="" src="./images/icon-share.svg" width="25" height="25" />
    </button>
`;
if (articleShare) {
    articleShare.insertAdjacentHTML('beforeend', buttonShare);
    articleShare.addEventListener('click', function (e) {
        const target = e.target;
        const button = target?.closest('.article__share--button');
        if (button) {
            toggleMenu(button);
        }
    });
}
function toggleMenu(button) {
    isMenuExpanded = !isMenuExpanded;
    button.setAttribute('aria-expanded', isMenuExpanded.toString());
    setDisplay();
}
function setDisplay() {
    let display = "";
    if (isMenuExpanded) {
        display = "block";
    }
    else {
        display = "none";
    }
    if (socialShareMenu && menuTitle) {
        socialShareMenu.style.display = display;
        menuTitle.style.display = display;
    }
}
