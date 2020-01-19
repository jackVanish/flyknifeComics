var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
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

var popups = document.getElementsByClassName("bio-link");
for(var j = 0; j < popups.length; j++) {
  popups[j].addEventListener("click", function(event) {
    event.preventDefault();
    popupInfo($(this));
    return false;
  });
}

$('#popup-close').click(function(event) {
    event.preventDefault();
    hidePopup();
    return false;
  });

function popupInfo( clicked ) {
  popWidth = $('#popup-container').width();
  popOffset = 150;
  $('#popup-container').css("margin-top",   (clicked[0].offsetTop - popOffset) + 'px');
  $('#popup-container').css("margin-left",  (window.innerWidth - popWidth) / 2 + 'px');
  $('#popup-container').css("margin-right", (window.innerWidth - popWidth) / 2 + 'px');

  var bio = $(clicked[0]).data("bio")

  $('#popup-image').attr('src', bios[bio].image)
  $('#popup-title').text(bios[bio].title)
  $('#popup-decription').text(bios[bio].description)

  $('#popup-container').fadeIn();
}

function hidePopup() {
  $('#popup-container').fadeOut();
}