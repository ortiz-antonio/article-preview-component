const buttonShare = `
    <button
      aria-label="open share menu"
      aria-expanded="false"
      aria-controls="social-share"
      aria-haspopup="true"
    >
      <img alt="" src="./images/icon-share.svg" width="25" height="25" />
    </button>
`;

const articleShare = document.getElementById("articleShare");

articleShare.insertAdjacentHTML('beforeend', buttonShare);
