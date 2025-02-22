function myFunction(x) {
  var copyText = document.getElementById(x);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
