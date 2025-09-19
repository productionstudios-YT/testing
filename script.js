window.__ow = window.__ow || {};
window.__ow.organizationId = "1915c441-fb76-4ab7-8b4f-872e0a543235";
window.__ow.template_id = "7fae1d89-9802-4b4b-918d-15dcf8224cc2";
window.__ow.integration_name = "manual_settings";
window.__ow.product_name = "chatbot";
(function(n, t, c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n);
  }
  var e = {
    _q: [],
    _h: null,
    _v: "2.0",
    on: function() {
      i(["on", c.call(arguments)]);
    },
    once: function() {
      i(["once", c.call(arguments)]);
    },
    off: function() {
      i(["off", c.call(arguments)]);
    },
    get: function() {
      if (!e._h) throw new Error("[OpenWidget] You can't use getters before load.");
      return i(["get", c.call(arguments)]);
    },
    call: function() {
      i(["call", c.call(arguments)]);
    },
    init: function() {
      var n = t.createElement("script");
      n.async = !0;
      n.src = "https://cdn.openwidget.com/openwidget.js";
      t.head.appendChild(n);
    },
  };
  !n.__ow.asyncInit && e.init();
  n.OpenWidget = e;
})(window, document, [].slice);
