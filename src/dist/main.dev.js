"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueSweetalert = _interopRequireDefault(require("vue-sweetalert2"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueSweetalert["default"]);

_vue["default"].filter('currency', function (value) {
  if (!value) return '';
  var dot = value.toString().split(".");
  dot[0] = dot[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return "Rp ".concat(dot.join("."));
});

_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');