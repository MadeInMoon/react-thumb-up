"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./ThumbUp.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThumbUp =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ThumbUp, _PureComponent);

  function ThumbUp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ThumbUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThumbUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      animated: false,
      expended: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      _this.animate();

      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animate", function () {
      _this.setState({
        animated: false,
        expended: false
      });

      setTimeout(function () {
        _this.setState({
          animated: true,
          expended: false
        });
      }, 300);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "expend", function () {
      _this.setState({
        expended: true,
        animated: false
      });
    });

    return _this;
  }

  _createClass(ThumbUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.animateOnMount ? this.animate() : this.expend();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          animated = _this$state.animated,
          expended = _this$state.expended; // If thumbColor is given, it will override both shirt and hand colors

      var thumbColor = this.props.thumbColor;
      var shirtColor = thumbColor || this.props.shirtColor;
      var handColor = thumbColor || this.props.handColor; // const animated = this.props.animated ? 'animated' : '';
      // console.log(this.props.animateOnMount);

      var rootClass = (0, _classnames.default)('root', this.props.className, {
        expended: expended,
        animated: animated
      });
      return _react.default.createElement("div", {
        className: rootClass,
        onClick: this.onClick
      }, _react.default.createElement("svg", {
        className: "thumb",
        version: "1.1",
        x: "0px",
        y: "0px",
        width: "456.814px",
        height: "456.814px",
        viewBox: "0 0 456.814 456.814",
        fillOpacity: this.props.thumbFillOpacity,
        style: {
          enableBackground: 'new 0 0 456.814 456.814'
        }
      }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
        fill: handColor,
        d: "M441.11,252.677c10.468-11.99,15.704-26.169,15.704-42.54c0-14.846-5.432-27.692-16.259-38.547 c-10.849-10.854-23.695-16.278-38.541-16.278h-79.082c0.76-2.664,1.522-4.948,2.282-6.851c0.753-1.903,1.811-3.999,3.138-6.283 c1.328-2.285,2.283-3.999,2.852-5.139c3.425-6.468,6.047-11.801,7.857-15.985c1.807-4.192,3.606-9.9,5.42-17.133 c1.811-7.229,2.711-14.465,2.711-21.698c0-4.566-0.055-8.281-0.145-11.134c-0.089-2.855-0.574-7.139-1.423-12.85 c-0.862-5.708-2.006-10.467-3.43-14.272c-1.43-3.806-3.716-8.092-6.851-12.847c-3.142-4.764-6.947-8.613-11.424-11.565 c-4.476-2.95-10.184-5.424-17.131-7.421c-6.954-1.999-14.801-2.998-23.562-2.998c-4.948,0-9.227,1.809-12.847,5.426 c-3.806,3.806-7.047,8.564-9.709,14.272c-2.666,5.711-4.523,10.66-5.571,14.849c-1.047,4.187-2.238,9.994-3.565,17.415 c-1.719,7.998-2.998,13.752-3.86,17.273c-0.855,3.521-2.525,8.136-4.997,13.845c-2.477,5.713-5.424,10.278-8.851,13.706 c-6.28,6.28-15.891,17.701-28.837,34.259c-9.329,12.18-18.94,23.695-28.837,34.545c-9.899,10.852-17.131,16.466-21.698,16.847 c-4.755,0.38-8.848,2.331-12.275,5.854c-3.427,3.521-5.14,7.662-5.14,12.419v183.01c0,4.949,1.807,9.182,5.424,12.703 c3.615,3.525,7.898,5.38,12.847,5.571c6.661,0.191,21.698,4.374,45.111,12.566c14.654,4.941,26.12,8.706,34.4,11.272 c8.278,2.566,19.849,5.328,34.684,8.282c14.849,2.949,28.551,4.428,41.11,4.428h4.855h21.7h10.276 c25.321-0.38,44.061-7.806,56.247-22.268c11.036-13.135,15.697-30.361,13.99-51.679c7.422-7.042,12.565-15.984,15.416-26.836 c3.231-11.604,3.231-22.74,0-33.397c8.754-11.611,12.847-24.649,12.272-39.115C445.395,268.286,443.971,261.055,441.11,252.677z"
      }), _react.default.createElement("path", {
        fill: shirtColor,
        d: "M100.5,191.864H18.276c-4.952,0-9.235,1.809-12.851,5.426C1.809,200.905,0,205.188,0,210.137v182.732 c0,4.942,1.809,9.227,5.426,12.847c3.619,3.611,7.902,5.421,12.851,5.421H100.5c4.948,0,9.229-1.81,12.847-5.421 c3.616-3.62,5.424-7.904,5.424-12.847V210.137c0-4.949-1.809-9.231-5.424-12.847C109.73,193.672,105.449,191.864,100.5,191.864z M67.665,369.308c-3.616,3.521-7.898,5.281-12.847,5.281c-5.14,0-9.471-1.76-12.99-5.281c-3.521-3.521-5.281-7.85-5.281-12.99 c0-4.948,1.759-9.232,5.281-12.847c3.52-3.617,7.85-5.428,12.99-5.428c4.949,0,9.231,1.811,12.847,5.428 c3.617,3.614,5.426,7.898,5.426,12.847C73.091,361.458,71.286,365.786,67.665,369.308z"
      })))), _react.default.createElement("div", {
        className: "circle-wrap"
      }, _react.default.createElement("div", {
        className: "circle-lg"
      })), _react.default.createElement("div", {
        className: "dots-wrap"
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--t')
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--tr')
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--br')
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--b')
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--bl')
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--tl')
      })));
    }
  }]);

  return ThumbUp;
}(_react.PureComponent); // ThumbUp.propTypes = {
//   animateOnMount: PropTypes.bool,
//   className: PropTypes.string,
//   thumbColor: PropTypes.string,
//   shirtColor: PropTypes.string,
//   handColor: PropTypes.string,
//   thumbFillOpacity: PropTypes.number,
//   onClick: PropTypes.func,
// };
// ThumbUp.contextTypes = {
//   appLanguage: React.PropTypes.string,
// };
// export default withStyles(s)(ThumbUp);


_defineProperty(ThumbUp, "defaultProps", {
  animateOnMount: true,
  thumbFillOpacity: 1 // thumbColor: '#888888',
  // shirtColor: 'white',
  // handColor: 'white',

});

var _default = ThumbUp;
exports.default = _default;