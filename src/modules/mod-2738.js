'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2738",
  name: "Replace \"E\" with \"G\"",
  description: "Replaces every E with G.",
  run: (value) => String(value).split("E").join("G"),
});
