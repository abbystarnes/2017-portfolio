function copyToClipboard() {
  let element = document.getElementById('email-content');
  console.log(element);
  let temp = document.createElement('input');
  document.body.append(temp);
  temp.value = element.innerHTML;
  (temp).select();
  console.log(temp.value, 'temp val');
  document.execCommand("copy");
  temp.remove();
}
