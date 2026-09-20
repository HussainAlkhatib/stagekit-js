'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3934",
  name: "Replace \"Y\" with \"h\"",
  description: "Replaces every Y with h.",
  run: (value) => String(value).split("Y").join("h"),
});
