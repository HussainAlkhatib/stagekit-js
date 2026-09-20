'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2438",
  name: "Replace \"z\" with \"L\"",
  description: "Replaces every z with L.",
  run: (value) => String(value).split("z").join("L"),
});
