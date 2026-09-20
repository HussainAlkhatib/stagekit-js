'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1454",
  name: "Replace \"j\" with \"D\"",
  description: "Replaces every j with D.",
  run: (value) => String(value).split("j").join("D"),
});
