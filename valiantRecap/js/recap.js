var coll = document.getElementsByClassName("collapsible");
console.log("COLL");
console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapse = this.getAttribute('data-collapse');
    var content = document.getElementById(collapse);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}