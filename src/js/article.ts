// Get DOM elements with type safety
const dialogShare = document.getElementById('dialogShare') as HTMLDialogElement;
const articleFooter = document.getElementById(
  'articleFooter',
) as HTMLElement | null;

let isDialogOpen = true;

setDisplay();
setDialogShareStyles();

const buttonShare = `
    <button
      class="article__footer--share"
      aria-label="Share menu"
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
  isDialogOpen = !isDialogOpen;

  button.setAttribute('aria-expanded', isDialogOpen.toString());
  setDisplay();
}

function setDisplay() {
  if (isDialogOpen) {
    dialogShare.show();
  } else {
    dialogShare.close();
  }
}

function setDialogShareStyles(){
  dialogShare.classList.remove('dialog__share');
  dialogShare.classList.add('dialog__share--js');
}
