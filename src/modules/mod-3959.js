'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3959",
  name: "Replace \"Y\" with \"G\"",
  description: "Replaces every Y with G.",
  run: (value) => String(value).split("Y").join("G"),
});
