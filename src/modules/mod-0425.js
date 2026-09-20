'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0425",
  name: "Replace \"a\" with \"4\"",
  description: "Replaces every a with 4.",
  run: (value) => String(value).split("a").join("4"),
});
