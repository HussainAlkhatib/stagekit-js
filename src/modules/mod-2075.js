'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2075",
  name: "Replace \"t\" with \"O\"",
  description: "Replaces every t with O.",
  run: (value) => String(value).split("t").join("O"),
});
