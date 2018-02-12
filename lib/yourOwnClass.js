"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.
var Name = function () {
  function Name(name) {
    _classCallCheck(this, Name);

    this.name = name;
  }

  _createClass(Name, [{
    key: "getName",
    value: function getName() {
      return "Your name is " + this.name;
    }
  }]);

  return Name;
}();

var name = new Name("Neal");
console.log(name.getName());

exports.Name = Name;