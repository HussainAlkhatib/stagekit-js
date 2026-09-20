'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2425",
  name: "Replace \"z\" with \"x\"",
  description: "Replaces every z with x.",
  run: (value) => String(value).split("z").join("x"),
});
