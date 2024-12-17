// Get DOM elements with type safety
const socialShareMenu = document.getElementById('articleShare');
const articleFooter = document.getElementById('articleFooter');
let isMenuExpanded = false;
setDisplay();
const buttonShare = `
    <button
      class="article__footer--share"
      aria-label="open share menu"
      aria-expanded="false"
      aria-controls="social-share"
      aria-haspopup="true"
    >
      <img alt="" src="./images/icon-share.svg" width="25" height="25" />
    </button>
`;
if (articleFooter) {
  articleFooter.insertAdjacentHTML('beforeend', buttonShare);
  articleFooter.addEventListener('click', (e) => {
    const target = e.target;
    const button = target?.closest('.article__footer--share');
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
  let display = '';
  if (isMenuExpanded) {
    display = 'flex';
  } else {
    display = 'none';
  }
  if (socialShareMenu) {
    socialShareMenu.style.display = display;
  }
}
