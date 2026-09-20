'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4028",
  name: "Replace \"Z\" with \"O\"",
  description: "Replaces every Z with O.",
  run: (value) => String(value).split("Z").join("O"),
});
