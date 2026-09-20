'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3157",
  name: "Replace \"L\" with \"x\"",
  description: "Replaces every L with x.",
  run: (value) => String(value).split("L").join("x"),
});
