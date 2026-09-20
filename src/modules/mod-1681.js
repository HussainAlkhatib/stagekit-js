'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1681",
  name: "Replace \"n\" with \"l\"",
  description: "Replaces every n with l.",
  run: (value) => String(value).split("n").join("l"),
});
