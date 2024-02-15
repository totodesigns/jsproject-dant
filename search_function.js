document.addEventListener('keyup',searchbank);

function searchbank() {
  // Declaring variables
  let input, filter, ul, li, a, i, txtValue;

  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("subjects");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {

    // Get the first anchor element inside the current list item (li[i])
    a = li[i].getElementsByTagName("a")[0];

    // Get the text content of the anchor element, preferring 'textContent' but falling back to 'innerText'
    txtValue = a.textContent; //|| a.innerText;

    // Convert the text content to uppercase and check if it contains the filter string
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } 
    else {
      li[i].style.display = "none";
    }
  }
}