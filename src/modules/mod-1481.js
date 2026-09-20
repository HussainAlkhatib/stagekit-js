'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1481",
  name: "Replace \"j\" with \"4\"",
  description: "Replaces every j with 4.",
  run: (value) => String(value).split("j").join("4"),
});
