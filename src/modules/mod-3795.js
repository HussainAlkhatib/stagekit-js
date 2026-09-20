'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3795",
  name: "Replace \"V\" with \"0\"",
  description: "Replaces every V with 0.",
  run: (value) => String(value).split("V").join("0"),
});
