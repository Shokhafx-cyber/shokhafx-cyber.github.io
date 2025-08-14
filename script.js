// set current year after DOM loads
document.addEventListener('DOMContentLoaded', function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
