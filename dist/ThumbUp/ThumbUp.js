"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./ThumbUp.scss");

var _colors = _interopRequireWildcard(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var svgOriginalSize = 456.814;
var svgViewBox = "0 0 ".concat(svgOriginalSize, " ").concat(svgOriginalSize);
var defaultThumbStyles = {
  shirtColor: _colors.default.primary,
  handColor: _colors.default.primary,
  fillOpacity: 1
};
var defaultThumbStylesActive = {
  shirtColor: _colors.default.primary,
  handColor: _colors.default.primary,
  fillOpacity: 1
};
var defaultThumbStylesUnactive = {
  shirtColor: _colors.default.secondary,
  handColor: _colors.default.secondary,
  fillOpacity: 0.3
};
var defaultSvgStyle = {
  enableBackground: "new ".concat(svgViewBox)
};

/**
 * ..
 */
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
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          controlled = _this$props.controlled,
          active = _this$props.active; // animate or unactive

      if (controlled && active) {// do nothing = reset color with
      } else {
        _this.animate();
      } // onClick props (optional)


      if (typeof onClick === 'function') {
        if (controlled) {
          onClick(!active);
        } else {
          onClick();
        }
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRootClass", function () {
      var _this$state = _this.state,
          animated = _this$state.animated,
          expended = _this$state.expended;
      var _this$props2 = _this.props,
          className = _this$props2.className,
          size = _this$props2.size;
      return (0, _classnames.default)('root', className, {
        expended: expended,
        animated: animated
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRootStyles", function () {
      var _this$props3 = _this.props,
          style = _this$props3.style,
          size = _this$props3.size;
      var dynamicStyles = {};

      if (size) {
        dynamicStyles.width = "".concat(size, "px");
        dynamicStyles.height = "".concat(size, "px");
      }

      return _objectSpread({}, dynamicStyles, style);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSvgStyles", function () {
      var svgStyle = _this.props.svgStyle;
      return _objectSpread({}, defaultSvgStyle, svgStyle);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getThumbStyles", function () {
      var _this$props4 = _this.props,
          thumbStyles = _this$props4.thumbStyles,
          controlled = _this$props4.controlled,
          active = _this$props4.active;

      if (controlled) {
        return active && thumbStyles ? thumbStyles.active || defaultThumbStylesActive : thumbStyles.unactive || defaultThumbStylesUnactive;
      } else if (thumbStyles.handColor) {
        // This condition is required for flowtype
        return thumbStyles;
      } else {
        return defaultThumbStyles;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCircleStyles", function () {
      var _this$props5 = _this.props,
          circleStyle = _this$props5.circleStyle,
          size = _this$props5.size;
      var dynamicStyles = {};

      if (size) {
        dynamicStyles.width = "".concat(size, "px");
        dynamicStyles.height = "".concat(size, "px");
      }

      return _objectSpread({}, dynamicStyles, circleStyle);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCustomSize", function (size) {
      var dotDistance = size / 1.6;
      var dotDistanceLateral = size / 2.5;
      var circleBorderWidth = size / 2.2222; // TODO not possible to update keyframes for adapt distance for a custom width
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDotStyle", function (index) {
      var _this$props6 = _this.props,
          dotsColor = _this$props6.dotsColor,
          dotsColors = _this$props6.dotsColors;

      if (dotsColor) {
        return {
          backgroundColor: dotsColor
        };
      } else if (dotsColors && dotsColors[index]) {
        return {
          backgroundColor: dotsColors[index]
        };
      } else {
        return {};
      }
    });

    return _this;
  }

  _createClass(ThumbUp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // TODO test update from parent
      if (prevProps.size !== this.props.size && typeof this.props.size === 'number') {
        this.setCustomSize(this.props.size);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          animateOnMount = _this$props7.animateOnMount,
          controlled = _this$props7.controlled,
          onClick = _this$props7.onClick,
          size = _this$props7.size;

      if (!controlled && animateOnMount) {
        this.animate();
      } else {
        this.expend(); // display a warning if thumb is controlled without having a `onClick` props

        if (typeof onClick !== 'function') {
          console.warn('ThumbUp is controlled, but no "onClick" function has been passed as props.'); // eslint-disable-line no-console, max-len
        }
      }

      if (typeof size === 'number') {
        this.setCustomSize(size);
      } else if (size && typeof size !== 'number') {
        console.warn('Thumb\'s "size" must be a number.'); // eslint-disable-line no-console, max-len
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          disableDots = _this$props8.disableDots,
          disableCircle = _this$props8.disableCircle;
      var rootClass = this.getRootClass();
      var rootStyles = this.getRootStyles();
      var svgStyles = this.getSvgStyles();
      var thumbStyles = this.getThumbStyles();
      var circleStyles = this.getCircleStyles();
      return _react.default.createElement("div", {
        className: rootClass,
        onClick: this.onClick,
        style: rootStyles
      }, _react.default.createElement("svg", {
        className: "thumb",
        version: "1.1",
        x: "0px",
        y: "0px",
        width: "".concat(svgOriginalSize, "px"),
        height: "".concat(svgOriginalSize, "px"),
        viewBox: svgViewBox,
        fillOpacity: thumbStyles.fillOpacity,
        style: svgStyles
      }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
        fill: thumbStyles.handColor,
        d: "M441.11,252.677c10.468-11.99,15.704-26.169,15.704-42.54c0-14.846-5.432-27.692-16.259-38.547 c-10.849-10.854-23.695-16.278-38.541-16.278h-79.082c0.76-2.664,1.522-4.948,2.282-6.851c0.753-1.903,1.811-3.999,3.138-6.283 c1.328-2.285,2.283-3.999,2.852-5.139c3.425-6.468,6.047-11.801,7.857-15.985c1.807-4.192,3.606-9.9,5.42-17.133 c1.811-7.229,2.711-14.465,2.711-21.698c0-4.566-0.055-8.281-0.145-11.134c-0.089-2.855-0.574-7.139-1.423-12.85 c-0.862-5.708-2.006-10.467-3.43-14.272c-1.43-3.806-3.716-8.092-6.851-12.847c-3.142-4.764-6.947-8.613-11.424-11.565 c-4.476-2.95-10.184-5.424-17.131-7.421c-6.954-1.999-14.801-2.998-23.562-2.998c-4.948,0-9.227,1.809-12.847,5.426 c-3.806,3.806-7.047,8.564-9.709,14.272c-2.666,5.711-4.523,10.66-5.571,14.849c-1.047,4.187-2.238,9.994-3.565,17.415 c-1.719,7.998-2.998,13.752-3.86,17.273c-0.855,3.521-2.525,8.136-4.997,13.845c-2.477,5.713-5.424,10.278-8.851,13.706 c-6.28,6.28-15.891,17.701-28.837,34.259c-9.329,12.18-18.94,23.695-28.837,34.545c-9.899,10.852-17.131,16.466-21.698,16.847 c-4.755,0.38-8.848,2.331-12.275,5.854c-3.427,3.521-5.14,7.662-5.14,12.419v183.01c0,4.949,1.807,9.182,5.424,12.703 c3.615,3.525,7.898,5.38,12.847,5.571c6.661,0.191,21.698,4.374,45.111,12.566c14.654,4.941,26.12,8.706,34.4,11.272 c8.278,2.566,19.849,5.328,34.684,8.282c14.849,2.949,28.551,4.428,41.11,4.428h4.855h21.7h10.276 c25.321-0.38,44.061-7.806,56.247-22.268c11.036-13.135,15.697-30.361,13.99-51.679c7.422-7.042,12.565-15.984,15.416-26.836 c3.231-11.604,3.231-22.74,0-33.397c8.754-11.611,12.847-24.649,12.272-39.115C445.395,268.286,443.971,261.055,441.11,252.677z"
      }), _react.default.createElement("path", {
        fill: thumbStyles.shirtColor,
        d: "M100.5,191.864H18.276c-4.952,0-9.235,1.809-12.851,5.426C1.809,200.905,0,205.188,0,210.137v182.732 c0,4.942,1.809,9.227,5.426,12.847c3.619,3.611,7.902,5.421,12.851,5.421H100.5c4.948,0,9.229-1.81,12.847-5.421 c3.616-3.62,5.424-7.904,5.424-12.847V210.137c0-4.949-1.809-9.231-5.424-12.847C109.73,193.672,105.449,191.864,100.5,191.864z M67.665,369.308c-3.616,3.521-7.898,5.281-12.847,5.281c-5.14,0-9.471-1.76-12.99-5.281c-3.521-3.521-5.281-7.85-5.281-12.99 c0-4.948,1.759-9.232,5.281-12.847c3.52-3.617,7.85-5.428,12.99-5.428c4.949,0,9.231,1.811,12.847,5.428 c3.617,3.614,5.426,7.898,5.426,12.847C73.091,361.458,71.286,365.786,67.665,369.308z"
      })))), !disableCircle && _react.default.createElement("div", {
        className: "circle-wrap"
      }, _react.default.createElement("div", {
        className: "circle-lg",
        style: circleStyles
      })), !disableDots && _react.default.createElement("div", {
        className: "dots-wrap"
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--t'),
        style: this.getDotStyle(0)
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--tr'),
        style: this.getDotStyle(1)
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--br'),
        style: this.getDotStyle(2)
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--b'),
        style: this.getDotStyle(3)
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--bl'),
        style: this.getDotStyle(4)
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('dot', 'dot--tl'),
        style: this.getDotStyle(5)
      })));
    }
  }]);

  return ThumbUp;
}(_react.PureComponent);

_defineProperty(ThumbUp, "defaultProps", {
  animateOnMount: true,
  disableDots: false,
  disableCircle: false,
  dotsColors: _colors.defaultDotsColors,
  svgStyle: defaultSvgStyle,
  thumbStyles: defaultThumbStyles,
  size: 200
});

var _default = ThumbUp;
exports.default = _default;