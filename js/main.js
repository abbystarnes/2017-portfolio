function copyToClipboard() {
  let element = document.getElementById('email-content');
  if (element) {
    let temp = document.createElement('input');
    document.body.append(temp);
    temp.value = element.innerHTML;
    (temp).select();
    document.execCommand("copy");
    temp.remove();
  }
}


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
