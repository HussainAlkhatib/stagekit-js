'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1892",
  name: "Replace \"q\" with \"O\"",
  description: "Replaces every q with O.",
  run: (value) => String(value).split("q").join("O"),
});
