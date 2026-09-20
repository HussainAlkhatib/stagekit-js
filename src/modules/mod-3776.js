'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3776",
  name: "Replace \"V\" with \"G\"",
  description: "Replaces every V with G.",
  run: (value) => String(value).split("V").join("G"),
});
