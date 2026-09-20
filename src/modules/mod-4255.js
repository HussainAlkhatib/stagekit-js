'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4255",
  name: "Replace \"3\" with \"x\"",
  description: "Replaces every 3 with x.",
  run: (value) => String(value).split("3").join("x"),
});
