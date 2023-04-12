// const mainItems = document.querySelectorAll('.main-item');

// mainItems.forEach(mainItem => {
//   mainItem.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//       const moreInfo = mainItem.querySelector('.more-info');
//       moreInfo.classList.toggle('active');
//       moreInfo.style.maxHeight = moreInfo.classList.contains('active') ? `${moreInfo.scrollHeight}px` : '0';
//     });
//   });
// });

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

