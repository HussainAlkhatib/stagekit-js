'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2462",
  name: "Replace \"z\" with \"9\"",
  description: "Replaces every z with 9.",
  run: (value) => String(value).split("z").join("9"),
});
