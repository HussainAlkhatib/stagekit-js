'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3789",
  name: "Replace \"V\" with \"T\"",
  description: "Replaces every V with T.",
  run: (value) => String(value).split("V").join("T"),
});
