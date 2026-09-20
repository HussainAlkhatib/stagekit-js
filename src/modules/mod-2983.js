'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2983",
  name: "Replace \"I\" with \"G\"",
  description: "Replaces every I with G.",
  run: (value) => String(value).split("I").join("G"),
});
