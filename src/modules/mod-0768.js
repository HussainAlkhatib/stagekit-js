'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0768",
  name: "Replace \"c\" with \"O\"",
  description: "Replaces every c with O.",
  run: (value) => String(value).split("c").join("O"),
});
