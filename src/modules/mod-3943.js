'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3943",
  name: "Replace \"Y\" with \"q\"",
  description: "Replaces every Y with q.",
  run: (value) => String(value).split("Y").join("q"),
});
