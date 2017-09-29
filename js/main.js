function copyToClipboard() {
  const element = document.getElementById('email-content');
  if (element) {
    const temp = document.createElement('input');
    document.body.append(temp);
    temp.value = element.innerHTML;
    (temp).select();
    document.execCommand('copy');
    temp.remove();
  }
}

function scrollToMain() {
  const to = document.getElementById('main-index').offsetTop;
  console.log(document.body.scrollTop);
  const duration = 500;
  if (document.body.scrollTop === to) return;
  const diff = to - document.body.scrollTop;
  const scrollStep = Math.PI / (duration / 10);
  let count = 0;
  let currPos;
  const start = document.body.scrollTop;
  scrollInterval = setInterval(() => {
    if (document.body.scrollTop !== to) {
      count = count + 1;
      currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
      document.body.scrollTop = currPos;
    } else { clearInterval(scrollInterval); }
  }, 10);
}
