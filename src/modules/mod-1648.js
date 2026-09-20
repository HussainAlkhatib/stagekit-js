'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1648",
  name: "Replace \"m\" with \"O\"",
  description: "Replaces every m with O.",
  run: (value) => String(value).split("m").join("O"),
});
