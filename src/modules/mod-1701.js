'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1701",
  name: "Replace \"n\" with \"G\"",
  description: "Replaces every n with G.",
  run: (value) => String(value).split("n").join("G"),
});
