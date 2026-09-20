'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3723",
  name: "Replace \"U\" with \"O\"",
  description: "Replaces every U with O.",
  run: (value) => String(value).split("U").join("O"),
});
