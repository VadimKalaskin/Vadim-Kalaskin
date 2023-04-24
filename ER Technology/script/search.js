// //Иконки и инпут

// const svg = document.querySelector('.header_search svg.searchSvg');
// const closeSvg = document.querySelector('.header_search svg.searchClose');

// const searchInput = document.querySelector(".search-input");
// const headerLang = document.querySelector('.header_lang');

// svg.addEventListener('click', () => {
//   svg.classList.toggle('active');
//   closeSvg.classList.toggle('active');
//   searchInput.classList.toggle('active');
//   headerLang.classList.toggle('displaynone');
// });

// closeSvg.addEventListener('click', () => {
//   searchInput.value = "";
// })

// //Иконки и инпут
// // Логика поиска и поведение блоков

// var allItems = document.querySelectorAll(".main-item");
// var originalTexts = [];

// for (var i = 0; i < allItems.length; i++) {
//   originalTexts.push([]);
//   var pElems = allItems[i].querySelectorAll("p");
//   for (var j = 0; j < pElems.length; j++) {
//     originalTexts[i].push(pElems[j].textContent);
//   }
// }

// searchInput.addEventListener("input", function(event) {
//   var searchValue = event.target.value.trim().toLowerCase();

//   if (event.target.value === "") {
//     for (var i = 0; i < allItems.length; i++) {
//       allItems[i].style.display = "block";
//       var pElems = allItems[i].querySelectorAll("p");
//       for (var j = 0; j < pElems.length; j++) {
//         pElems[j].innerHTML = originalTexts[i][j];
//       }
//     }
//   } else {
//     for (var i = 0; i < allItems.length; i++) {
//       var itemTexts = [];
//       var pElems = allItems[i].querySelectorAll("p");
//       for (var j = 0; j < pElems.length; j++) {
//         itemTexts.push(pElems[j].textContent.toLowerCase());
//       }
//       if (itemTexts.join("").indexOf(searchValue) === -1) {
//         allItems[i].style.display = "none";
//       } else {
//         for (var j = 0; j < pElems.length; j++) {
//           var itemText = pElems[j].textContent.toLowerCase();
//           var regex = new RegExp(searchValue, "gi");
//           pElems[j].innerHTML = itemText.replace(regex, "<span style='color: #3694E7;'>" + searchValue + "</span>");
//         }
//         allItems[i].style.display = "block";
//         if(!allItems[i].querySelector('.plusminus').classList.contains("active")) {
//           allItems[i].querySelector('a').click();
//         }
//         //Открыть блок, если он найден.
        
//       }
//     }
//   }
// });

// // Логика поиска и поведение блоков



// Code for search icon and input

const svg = document.querySelector('.header_search svg.searchSvg');
const closeSvg = document.querySelector('.header_search svg.searchClose');

const searchInput = document.querySelector(".search-input");
const headerLang = document.querySelector('.header_lang');

svg.addEventListener('click', () => {
  svg.classList.toggle('active');
  closeSvg.classList.toggle('active');
  searchInput.classList.toggle('active');
  headerLang.classList.toggle('displaynone');
});

// Code for search and behavior of blocks

var allItems = document.querySelectorAll(".main-item");
var originalTexts = [];

// Loop through each main-item class and store the text of all p tags inside it.
for (var i = 0; i < allItems.length; i++) {
  originalTexts.push([]);
  var pElems = allItems[i].querySelectorAll("p");
  for (var j = 0; j < pElems.length; j++) {
    originalTexts[i].push(pElems[j].textContent);  }}

// Function to execute when text is being entered into the search input field
searchInput.addEventListener("input", function(event) {
  var searchValue = event.target.value.trim().toLowerCase();

  if (event.target.value === "") { // If search input is empty, show all main items and restore original text.
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].style.display = "block";
      var pElems = allItems[i].querySelectorAll("p");
      for (var j = 0; j < pElems.length; j++) {
        pElems[j].innerHTML = originalTexts[i][j];
      }
    }
  } else { // Execute search function
    for (var i = 0; i < allItems.length; i++) {
      var itemTexts = [];
      var pElems = allItems[i].querySelectorAll("p"); // Get all 'p' elements of each main-item
      for (var j = 0; j < pElems.length; j++) {
        itemTexts.push(pElems[j].textContent.toLowerCase());
      }
      if (itemTexts.join("").indexOf(searchValue) === -1) { // Hide main-item if search term not found
        allItems[i].style.display = "none";
      } else { // Highlight search term and show main-item if search term is found
        for (var j = 0; j < pElems.length; j++) {
          var itemText = pElems[j].textContent.toLowerCase();
          var regex = new RegExp(searchValue, "gi");
          pElems[j].innerHTML = itemText.replace(regex, "<span style='color: #3694E7;'>" + searchValue + "</span>"); // Highlight the search term
        }
        allItems[i].style.display = "block";
        if(!allItems[i].querySelector('.plusminus').classList.contains("active")) { // If main-item is hidden, open it.
          allItems[i].querySelector('a').click();
        }
      }
    }
  }
});

closeSvg.addEventListener('click', () => {
  searchInput.value = "";
  searchInput.dispatchEvent(new InputEvent('input'));
});


// Code for search and behavior of blocks
