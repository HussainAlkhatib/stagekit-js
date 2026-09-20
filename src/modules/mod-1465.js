'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1465",
  name: "Replace \"j\" with \"O\"",
  description: "Replaces every j with O.",
  run: (value) => String(value).split("j").join("O"),
});
