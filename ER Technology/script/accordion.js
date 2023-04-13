const mainItems = document.querySelectorAll('.main-item');
const buttonPrincipes = document.querySelector('.principesBtn');
const principes = buttonPrincipes.closest('.container-fluid');
const moreInfo = document.querySelectorAll('.principes .more-info');

mainItems.forEach((mainItem) => {
  const buttons = mainItem.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.querySelector('.plusminus').classList.toggle('active');
      const moreInfo = mainItem.querySelectorAll('.more-info');
      moreInfo.forEach((block) => {
        block.classList.toggle('active');
        block.style.maxHeight = block.classList.contains('active')
          ? `${block.scrollHeight}px`
          : '0';
      });
    });
  });
});

buttonPrincipes.addEventListener('click', () => {
  buttonPrincipes.classList.toggle('active');
  principes.classList.toggle('active');

  moreInfo.forEach((block) => {
    console.log(moreInfo);
    block.classList.toggle('active');
    block.style.maxHeight = block.classList.contains('active') ? `${block.scrollHeight}px` : '0';
  });
});
