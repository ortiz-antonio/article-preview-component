// Get DOM elements with type safety
const socialShareMenu = document.getElementById(
  'social-share',
) as HTMLElement | null;
const articleFooter = document.getElementById(
  'articleFooter',
) as HTMLElement | null;
const menuTitle = document.getElementById('share') as HTMLElement | null;

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

  articleFooter.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const button = target?.closest(
      '.article__footer--share',
    ) as HTMLElement | null;
    if (button) {
      toggleMenu(button);
    }
  });
}

function toggleMenu(button: HTMLElement): void {
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

  if (socialShareMenu && menuTitle) {
    socialShareMenu.style.display = display;
    menuTitle.style.display = display;
  }
}
