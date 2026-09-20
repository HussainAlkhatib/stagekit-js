'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4440",
  name: "Replace \"6\" with \"z\"",
  description: "Replaces every 6 with z.",
  run: (value) => String(value).split("6").join("z"),
});
