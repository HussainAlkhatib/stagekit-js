'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3769",
  name: "Replace \"V\" with \"z\"",
  description: "Replaces every V with z.",
  run: (value) => String(value).split("V").join("z"),
});
