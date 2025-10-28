window.addEventListener("load", function () {
  var header = document.getElementById("header");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "header.html", false);
  xmlhttp.send();
  header.innerHTML = xmlhttp.responseText;

  const navLinkEls = document.querySelectorAll('.navbar-nav .nav-link');  // Selects all the elements with the two classes
  const windowPathname = window.location.pathname;

  navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if ((windowPathname === navLinkPathname || (windowPathname === '/index.html' && navLinkPathname ==='/'))) {
      navLinkEl.classList.add('active');
    }
  })
});