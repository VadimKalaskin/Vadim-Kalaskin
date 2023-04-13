const mainItems = document.querySelectorAll('.main-item');

mainItems.forEach(mainItem => {
  const buttons = mainItem.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.querySelector('.plusminus').classList.toggle('active');
      const moreInfo = mainItem.querySelectorAll('.more-info');
      moreInfo.forEach(block => {
        block.classList.toggle('active');
        block.style.maxHeight = block.classList.contains('active') ? `${block.scrollHeight}px` : '0';
      });
    })
  });
});

const buttonPrincipes = document.querySelector('.principesBtn');
const principes = buttonPrincipes.closest('.container-fluid');
const moreInfo = principes.querySelectorAll('.more-info');

buttonPrincipes.addEventListener('click', () => {
  buttonPrincipes.classList.toggle('active');
  principes.classList.toggle('active');

  moreInfo.forEach(block => {
    block.classList.toggle('active');
    block.style.maxHeight = block.classList.contains('active') ? `${block.scrollHeight}px` : '0';
  })
})

