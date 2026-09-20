'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3791",
  name: "Replace \"V\" with \"W\"",
  description: "Replaces every V with W.",
  run: (value) => String(value).split("V").join("W"),
});
