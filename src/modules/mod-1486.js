'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1486",
  name: "Replace \"j\" with \"9\"",
  description: "Replaces every j with 9.",
  run: (value) => String(value).split("j").join("9"),
});
