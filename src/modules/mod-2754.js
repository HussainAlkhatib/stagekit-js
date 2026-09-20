'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2754",
  name: "Replace \"E\" with \"W\"",
  description: "Replaces every E with W.",
  run: (value) => String(value).split("E").join("W"),
});
