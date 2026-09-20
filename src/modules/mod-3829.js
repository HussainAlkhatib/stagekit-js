'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3829",
  name: "Replace \"W\" with \"y\"",
  description: "Replaces every W with y.",
  run: (value) => String(value).split("W").join("y"),
});
