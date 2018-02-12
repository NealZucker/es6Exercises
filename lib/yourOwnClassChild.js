"use strict";

var _yourOwnClass = require("./yourOwnClass");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YourName = function (_Name) {
  _inherits(YourName, _Name);

  function YourName(name) {
    _classCallCheck(this, YourName);

    return _possibleConstructorReturn(this, (YourName.__proto__ || Object.getPrototypeOf(YourName)).call(this, name));
  }

  return YourName;
}(_yourOwnClass.Name);

var yourName = new YourName("neal2");
console.log(yourName.getName());