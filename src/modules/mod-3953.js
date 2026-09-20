'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3953",
  name: "Replace \"Y\" with \"A\"",
  description: "Replaces every Y with A.",
  run: (value) => String(value).split("Y").join("A"),
});
