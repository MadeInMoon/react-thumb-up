"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultDotsColors = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primary = '#1789FC';
var secondary = 'grey';
var colors = {
  primary: primary,
  secondary: secondary
};
var defaultDotsColors = [(0, _tinycolor.default)(primary).lighten(5).toString(), (0, _tinycolor.default)(primary).lighten(30).toString(), (0, _tinycolor.default)(primary).lighten(5).toString(), (0, _tinycolor.default)(primary).lighten(30).toString(), (0, _tinycolor.default)(primary).lighten(5).toString(), (0, _tinycolor.default)(primary).lighten(30).toString()];
exports.defaultDotsColors = defaultDotsColors;
var _default = colors;
exports.default = _default;