/* Fills the privacy email on /privacy/ from split data attributes, so the
   address never appears in the page source, the sitemap or any script. Without
   JavaScript the <noscript> text points people to the contact form. */
(function () {
  var at = String.fromCharCode(64);
  document.querySelectorAll('.privacy-email').forEach(function (el) {
    var addr = el.dataset.u + at + el.dataset.d + '.' + el.dataset.t;
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    el.replaceChildren(a);
  });
})();
