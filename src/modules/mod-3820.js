'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3820",
  name: "Replace \"W\" with \"p\"",
  description: "Replaces every W with p.",
  run: (value) => String(value).split("W").join("p"),
});
