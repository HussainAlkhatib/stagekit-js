'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1579",
  name: "Replace \"l\" with \"G\"",
  description: "Replaces every l with G.",
  run: (value) => String(value).split("l").join("G"),
});
