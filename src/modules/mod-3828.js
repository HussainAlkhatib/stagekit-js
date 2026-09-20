'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3828",
  name: "Replace \"W\" with \"x\"",
  description: "Replaces every W with x.",
  run: (value) => String(value).split("W").join("x"),
});
