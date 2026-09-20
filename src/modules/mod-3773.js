'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3773",
  name: "Replace \"V\" with \"D\"",
  description: "Replaces every V with D.",
  run: (value) => String(value).split("V").join("D"),
});
