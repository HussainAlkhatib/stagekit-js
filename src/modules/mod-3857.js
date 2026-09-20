'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3857",
  name: "Replace \"W\" with \"1\"",
  description: "Replaces every W with 1.",
  run: (value) => String(value).split("W").join("1"),
});
