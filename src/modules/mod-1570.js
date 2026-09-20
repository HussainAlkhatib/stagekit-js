'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1570",
  name: "Replace \"l\" with \"x\"",
  description: "Replaces every l with x.",
  run: (value) => String(value).split("l").join("x"),
});
