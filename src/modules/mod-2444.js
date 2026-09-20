'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2444",
  name: "Replace \"z\" with \"R\"",
  description: "Replaces every z with R.",
  run: (value) => String(value).split("z").join("R"),
});
