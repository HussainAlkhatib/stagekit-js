'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0356",
  name: "Replace \"a\" with \"O\"",
  description: "Replaces every a with O.",
  run: (value) => String(value).split("a").join("O"),
});
