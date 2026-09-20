'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2180",
  name: "Replace \"v\" with \"x\"",
  description: "Replaces every v with x.",
  run: (value) => String(value).split("v").join("x"),
});
