"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  n(1), e.exports = n(2);
}, function (e, t, n) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("header");

    function t() {
      window.scrollY >= 200 ? e.classList.add("active") : e.classList.remove("active");
    }

    function n() {
      html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    function o() {
      html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    t(), window.addEventListener("scroll", function (e) {
      window.scrollY;
      t();
    });
    var r = document.getElementById("burgerOpen"),
        c = document.getElementById("burgerClose");
    r.addEventListener("click", function () {
      e.classList.add("open-menu"), n();
    }), c.addEventListener("click", function () {
      e.classList.remove("open-menu"), o();
    });
    var i = document.getElementById("searchOpen"),
        l = document.getElementById("searchClose"),
        d = document.getElementById("searchForm"),
        u = d.querySelector("input");
    i.addEventListener("click", function () {
      e.classList.add("search"), n(), u.focus();
    }), l.addEventListener("click", function () {
      e.classList.remove("search"), o();
    }), d.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = u.value;
      console.log(t), window.location.href = "/search?search=" + t;
    });
  });
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e, t;
    e = function e(_e) {
      1 == _e ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp");
    }, (t = new Image()).onload = t.onerror = function () {
      e(2 == t.height);
    }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
}]);