'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2685",
  name: "Replace \"D\" with \"O\"",
  description: "Replaces every D with O.",
  run: (value) => String(value).split("D").join("O"),
});
