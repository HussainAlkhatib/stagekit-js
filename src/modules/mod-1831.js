'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1831",
  name: "Replace \"p\" with \"O\"",
  description: "Replaces every p with O.",
  run: (value) => String(value).split("p").join("O"),
});
