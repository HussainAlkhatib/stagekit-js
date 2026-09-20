'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2616",
  name: "Replace \"C\" with \"G\"",
  description: "Replaces every C with G.",
  run: (value) => String(value).split("C").join("G"),
});
