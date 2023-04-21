const accordButtons = document.querySelectorAll('a div.btn-wrapper');
const inlineButtons = document.querySelectorAll('button.inlineAncor');

  if(window.innerWidth < 991){
    accordButtons.forEach(item => {
      item.style.display = 'none';
    });
    inlineButtons.forEach(item => {
      item.style.display = 'inline-block';
    })
  } else { 
    accordButtons.forEach(item => item.style.display = 'flex');
    inlineButtons.forEach(item => item.style.display = 'none');
  }


  window.addEventListener('resize', () => {
    if(window.innerWidth < 991){
      accordButtons.forEach(item => {
        item.style.display = 'none';
      });
      inlineButtons.forEach(item => {
        item.style.display = 'inline-block';
      })
    } else {
      accordButtons.forEach(item => item.style.display = 'flex');
      inlineButtons.forEach(item => {
        item.style.display = 'none';
      })
    }
  });


