const mainItems = document.querySelectorAll('.main-item');
const buttonPrincipes = document.querySelectorAll('.principesBtn');
const principes = buttonPrincipes[1].closest('.container-fluid');
const principesInfo = document.querySelectorAll('.principes .more-info');
const inlineAncors = document.querySelectorAll('.inlineAncor');

buttonPrincipes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    principes.classList.toggle('active');
    btn.classList.toggle('active');

    principesInfo.forEach((block) => {
        block.classList.toggle('active');
        block.style.maxHeight = block.classList.contains('active') ? `${block.scrollHeight}px` : '0';
      });

});
})




for(let i = 0; i < mainItems.length; i++) {
    let button = mainItems[i].querySelector('a');
    let plus = button.querySelector('.plusminus');
    let blocksToOpen = mainItems[i].querySelectorAll('.more-info');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        plus.classList.toggle('active');
        blocksToOpen.forEach((block) => {
            block.classList.toggle('active');
            block.style.maxHeight = block.classList.contains('active')
          ? `${block.scrollHeight}px`
          : '0';
        })
    })
    
    inlineAncors[i].addEventListener('click', (e) => {
        e.preventDefault();
        plus.classList.toggle('active');
        inlineAncors[i].classList.toggle('active');
        blocksToOpen.forEach((block) => {
            block.classList.toggle('active');
            block.style.maxHeight = block.classList.contains('active')
          ? `${block.scrollHeight}px`
          : '0';
        })
    });
}; // конец for




