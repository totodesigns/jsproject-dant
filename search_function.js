document.addEventListener('keyup',searchbank);

function searchbank() {

  let input, filter, ul, li, a, i, txtValue;

// NADIALIVA ^^^

  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("subjects");
  li = ul.getElementsByTagName('li');

// ANDREAS ^^^

  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];

    txtValue = a.textContent;

// DENNIS ^^^

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } 
    else {
      li[i].style.display = "none";
    }
  }
}

// TONNY ^^^