'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2189",
  name: "Replace \"v\" with \"G\"",
  description: "Replaces every v with G.",
  run: (value) => String(value).split("v").join("G"),
});
