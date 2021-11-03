(function () {
  'use strict'

  let formEles = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(formEles).forEach((formEle) => {
    formEle.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (formEle.checkValidity()) document.location.pathname = "client/pages/admin.html";
      // if (!formEle.checkValidity()) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }

      formEle.classList.add('was-validated');
    }, false);
  })
})();