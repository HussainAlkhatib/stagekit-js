'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3842",
  name: "Replace \"W\" with \"L\"",
  description: "Replaces every W with L.",
  run: (value) => String(value).split("W").join("L"),
});
