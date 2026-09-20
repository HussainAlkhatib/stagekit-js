'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3827",
  name: "Replace \"W\" with \"w\"",
  description: "Replaces every W with w.",
  run: (value) => String(value).split("W").join("w"),
});
