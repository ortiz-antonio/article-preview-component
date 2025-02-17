// Get DOM elements with type safety
const dialogShare = document.getElementById('dialogShare') as HTMLDialogElement;
const articleFooter = document.getElementById(
  'articleFooter',
) as HTMLElement | null;

let isDialogOpen = false;

setDisplay();
setDialogShareStyles();

const buttonShare = `
    <button
      class="article__footer--share"
      aria-label="Share menu"
      aria-expanded="false"
      aria-controls="dialogShare"
      aria-haspopup="true"
    >
      <svg aria-hidden="true" focusable="false"xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>

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

function setDialogShareStyles() {
  dialogShare.classList.remove('dialog__share');
  dialogShare.classList.add('dialog__share-js');
}
