'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2412",
  name: "Replace \"z\" with \"k\"",
  description: "Replaces every z with k.",
  run: (value) => String(value).split("z").join("k"),
});
