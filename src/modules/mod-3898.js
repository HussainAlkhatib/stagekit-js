'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3898",
  name: "Replace \"X\" with \"G\"",
  description: "Replaces every X with G.",
  run: (value) => String(value).split("X").join("G"),
});
