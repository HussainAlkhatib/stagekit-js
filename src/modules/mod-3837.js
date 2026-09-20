'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3837",
  name: "Replace \"W\" with \"G\"",
  description: "Replaces every W with G.",
  run: (value) => String(value).split("W").join("G"),
});
