const socialShareMenu = document.getElementById('social-share');
const articleShare = document.getElementById("articleShare");
const menuTitle = document.getElementById("share");

let isMenuExpanded = false;

menuClose();

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

articleShare.insertAdjacentHTML('beforeend', buttonShare);

articleShare.addEventListener('click', function (e) {
  const button = e.target.closest('.article__share--button');
  if (button) {
    toggleMenu(button);
  }  
});

function toggleMenu(button){
  isMenuExpanded = !isMenuExpanded;

  if(button){
    button.setAttribute('aria-expanded', isMenuExpanded);
  }
  
  if(isMenuExpanded){
    menuOpen();
  }
  if(!isMenuExpanded){
    menuClose();
  }
}

function menuOpen(){
  socialShareMenu.style.display = "block";
  menuTitle.style.display = "block";
  /*   socialShareMenu.setAttribute('aria-hidden', "false"); */
  /*   socialShareMenu.firstElementChild.querySelector('a').focus(); */
}

function menuClose(){
  socialShareMenu.style.display = "none";
  menuTitle.style.display = "none";
  /*   socialShareMenu.setAttribute('aria-hidden', "true"); */
}
