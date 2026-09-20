'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3772",
  name: "Replace \"V\" with \"C\"",
  description: "Replaces every V with C.",
  run: (value) => String(value).split("V").join("C"),
});
