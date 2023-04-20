const mainItems = document.querySelectorAll('.main-item');
const buttonPrincipes = document.querySelector('.principesBtn');
const principes = buttonPrincipes.closest('.container-fluid');
const moreInfo = document.querySelectorAll('.principes .more-info');
const inlineAncors = document.querySelectorAll('.inlineAncor');

mainItems.forEach((mainItem) => {
  const buttons = mainItem.querySelectorAll('a');
  
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
  })
});

// Переписать под FOR


buttonPrincipes.addEventListener('click', () => {
  buttonPrincipes.classList.toggle('active');
  principes.classList.toggle('active');

  moreInfo.forEach((block) => {
    block.classList.toggle('active');
    block.style.maxHeight = block.classList.contains('active') ? `${block.scrollHeight}px` : '0';
  });
});


  // });
  // inlineAncors.forEach(inlineAncor => {
  //   inlineAncor.addEventListener('click', () => {
  //     inlineAncor.classList.toggle('active');
  //     const moreInfo = mainItem.querySelectorAll('.more-info');
  //     moreInfo.forEach((block) => {
  //       block.classList.toggle('active');
  //       block.style.maxHeight = block.classList.contains('active')
  //         ? `${block.scrollHeight}px`
  //         : '0';
  //     });
  //   });
  mainItems.forEach((mainItem) => {
    const buttons = mainItem.querySelectorAll('.inlineAncors');
    
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('active');
        const moreInfo = mainItem.querySelectorAll('.more-info');
        moreInfo.forEach((block) => {
          block.classList.toggle('active');
          block.style.maxHeight = block.classList.contains('active')
            ? `${block.scrollHeight}px`
            : '0';
        });
      });
    })
  });