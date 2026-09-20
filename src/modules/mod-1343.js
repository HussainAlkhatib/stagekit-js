'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1343",
  name: "Replace \"h\" with \"O\"",
  description: "Replaces every h with O.",
  run: (value) => String(value).split("h").join("O"),
});
