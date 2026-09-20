'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3877",
  name: "Replace \"X\" with \"l\"",
  description: "Replaces every X with l.",
  run: (value) => String(value).split("X").join("l"),
});
