var allItems = document.querySelectorAll(".main-item");
var originalTexts = [];

for (var i = 0; i < allItems.length; i++) {
  originalTexts.push(allItems[i].querySelector("p").textContent);
}

var searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", function(event) {
  var searchValue = event.target.value.trim().toLowerCase();

  if (event.target.value === "") {
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].style.display = "flex";
      allItems[i].querySelector("p").innerHTML = originalTexts[i];
    }
  } else {
    for (var i = 0; i < allItems.length; i++) {
      var itemText = allItems[i].querySelector("p").textContent.toLowerCase();
      if (itemText.indexOf(searchValue) === -1) {
        allItems[i].style.display = "none";
      } else {
        var regex = new RegExp(searchValue, "gi");
        allItems[i].querySelector("p").innerHTML = itemText.replace(regex, "<span style='color: #3694E7;'>" + searchValue + "</span>");
        allItems[i].style.display = "flex";
      }
    }
  }
});
