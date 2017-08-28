function copyToClipboard() {
  let element = document.getElementById('email-content');
  if (element) {
    console.log(element);
    let temp = document.createElement('input');
    document.body.append(temp);
    temp.value = element.innerHTML;
    (temp).select();
    console.log(temp.value, 'temp val');
    document.execCommand("copy");
    temp.remove();
  }
}

function scrollToMain() {
    let to = document.getElementById('main-index').offsetTop;
    let duration = 500;
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = document.body.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

// function test(elID)
// {
//     var dest = document.getElementById(elID);
//     scrollTo(dest.offsetTop, 500);
// }
