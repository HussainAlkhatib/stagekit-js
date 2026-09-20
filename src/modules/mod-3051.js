'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3051",
  name: "Replace \"J\" with \"O\"",
  description: "Replaces every J with O.",
  run: (value) => String(value).split("J").join("O"),
});
