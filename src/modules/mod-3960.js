'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3960",
  name: "Replace \"Y\" with \"H\"",
  description: "Replaces every Y with H.",
  run: (value) => String(value).split("Y").join("H"),
});
