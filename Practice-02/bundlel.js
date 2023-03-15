(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('d3')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'd3'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM, global.d3));
})(this, (function (React$1, ReactDOM, d3) { 'use strict';

  var FaceContainer = function FaceContainer(_ref) {
    var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      centerX = _ref.centerX,
      centerY = _ref.centerY;
    return /*#__PURE__*/React$1.createElement("svg", {
      width: width,
      height: height
    }, /*#__PURE__*/React$1.createElement("g", {
      transform: "translate(".concat(centerX, ", ").concat(centerY, ")")
    }, children));
  };

  var BackgroundCircle = function BackgroundCircle(_ref) {
    var radius = _ref.radius,
      strokeWidth = _ref.strokeWidth;
    return /*#__PURE__*/React$1.createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth
    });
  };

  var Eyes = function Eyes(_ref) {
    var eyeOffsetX = _ref.eyeOffsetX,
      eyeOffsetY = _ref.eyeOffsetY,
      eyeRadius = _ref.eyeRadius;
    return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("circle", {
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React$1.createElement("circle", {
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }));
  };

  var Mouth = function Mouth(_ref) {
    var mouthRadius = _ref.mouthRadius,
      mouthWidth = _ref.mouthWidth;
    var mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);
    return /*#__PURE__*/React$1.createElement("path", {
      d: mouthArc()
    });
  };

  var Face = function Face(_ref) {
    var width = _ref.width,
      height = _ref.height,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      strokeWidth = _ref.strokeWidth,
      eyeOffsetX = _ref.eyeOffsetX,
      eyeOffsetY = _ref.eyeOffsetY,
      eyeRadius = _ref.eyeRadius,
      mouthRadius = _ref.mouthRadius,
      mouthWidth = _ref.mouthWidth;
    return /*#__PURE__*/React.createElement(FaceContainer, {
      width: width,
      height: height,
      centerX: centerX,
      centerY: centerY
    }, /*#__PURE__*/React.createElement(BackgroundCircle, {
      radius: centerY - strokeWidth / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React.createElement(Eyes, {
      eyeOffsetX: eyeOffsetX,
      eyeOffsetY: eyeOffsetY,
      eyeRadius: eyeRadius
    }), /*#__PURE__*/React.createElement(Mouth, {
      mouthRadius: mouthRadius,
      mouthWidth: mouthWidth
    }));
  };

  var WIDTH = 160;
  var HEIGHT = 160;
  var array = d3.range(6 * 3);
  var App = function App() {
    return array.map(function (_, index) {
      return /*#__PURE__*/React$1.createElement(Face, {
        key: index,
        width: WIDTH,
        height: HEIGHT,
        centerX: WIDTH / 2,
        centerY: HEIGHT / 2,
        strokeWidth: 6 + Math.random() * 3,
        eyeOffsetX: 20 + Math.random() * 9,
        eyeOffsetY: 20 + Math.random() * 15,
        eyeRadius: 5 + Math.random() * 10,
        mouthWidth: 7 + Math.random() * 9,
        mouthRadius: 30 + Math.random() * 9
      });
    });
  };
  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render( /*#__PURE__*/React$1.createElement(App, null));

}));
