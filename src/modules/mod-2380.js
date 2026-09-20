'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2380",
  name: "Replace \"y\" with \"O\"",
  description: "Replaces every y with O.",
  run: (value) => String(value).split("y").join("O"),
});
