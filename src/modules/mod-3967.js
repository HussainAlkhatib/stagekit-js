'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3967",
  name: "Replace \"Y\" with \"O\"",
  description: "Replaces every Y with O.",
  run: (value) => String(value).split("Y").join("O"),
});
