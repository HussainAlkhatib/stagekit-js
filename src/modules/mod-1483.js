'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1483",
  name: "Replace \"j\" with \"6\"",
  description: "Replaces every j with 6.",
  run: (value) => String(value).split("j").join("6"),
});
