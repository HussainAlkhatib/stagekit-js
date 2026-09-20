'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4609",
  name: "Replace \"9\" with \"l\"",
  description: "Replaces every 9 with l.",
  run: (value) => String(value).split("9").join("l"),
});
