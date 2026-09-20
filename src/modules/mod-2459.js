'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2459",
  name: "Replace \"z\" with \"6\"",
  description: "Replaces every z with 6.",
  run: (value) => String(value).split("z").join("6"),
});
