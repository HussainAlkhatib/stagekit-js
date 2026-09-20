'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3743",
  name: "Replace \"U\" with \"9\"",
  description: "Replaces every U with 9.",
  run: (value) => String(value).split("U").join("9"),
});
