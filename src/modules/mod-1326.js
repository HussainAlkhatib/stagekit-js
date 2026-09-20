'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1326",
  name: "Replace \"h\" with \"x\"",
  description: "Replaces every h with x.",
  run: (value) => String(value).split("h").join("x"),
});
