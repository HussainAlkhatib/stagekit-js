'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3190",
  name: "Replace \"L\" with \"5\"",
  description: "Replaces every L with 5.",
  run: (value) => String(value).split("L").join("5"),
});
