(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = year;
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".sub-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.parentElement;
      var open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".has-sub").forEach(function (item) {
      var closeTimer = null;

      function keepOpen() {
        if (closeTimer) window.clearTimeout(closeTimer);
        closeTimer = null;
        item.classList.add("open");
      }

      function closeSoon() {
        if (closeTimer) window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(function () {
          item.classList.remove("open");
          closeTimer = null;
        }, 600);
      }

      item.addEventListener("mouseenter", keepOpen);
      item.addEventListener("mouseleave", closeSoon);
      item.addEventListener("focusin", keepOpen);
      item.addEventListener("focusout", function (event) {
        if (!item.contains(event.relatedTarget)) closeSoon();
      });
    });
  }

  document.querySelectorAll(".flip").forEach(function (card) {
    function toggle() {
      card.classList.toggle("is-flipped");
    }
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  if (slides.length) {
    var index = 0;
    var timer = null;
    var dots = document.querySelectorAll(".dots button");

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        if (dotIndex === index) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function start() {
      stop();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = window.setInterval(function () { show(index + 1); }, 7000);
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    var prev = document.querySelector(".carousel-btn.prev");
    var next = document.querySelector(".carousel-btn.next");
    if (prev) prev.addEventListener("click", function () { show(index - 1); start(); });
    if (next) next.addEventListener("click", function () { show(index + 1); start(); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-slide")));
        start();
      });
    });

    var carousel = document.querySelector(".carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);
      carousel.addEventListener("focusin", stop);
      carousel.addEventListener("focusout", start);
    }
    show(0);
    start();
  }

  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImage = lightbox.querySelector("img");
    var closeButton = lightbox.querySelector(".lightbox-close");

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightboxImage.removeAttribute("src");
    }

    document.querySelectorAll("[data-full]").forEach(function (button) {
      button.addEventListener("click", function () {
        lightboxImage.src = button.getAttribute("data-full");
        lightboxImage.alt = button.getAttribute("data-alt") || "";
        lightbox.classList.add("open");
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }
})();
