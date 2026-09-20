'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4499",
  name: "Replace \"7\" with \"x\"",
  description: "Replaces every 7 with x.",
  run: (value) => String(value).split("7").join("x"),
});
