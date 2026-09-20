'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3850",
  name: "Replace \"W\" with \"T\"",
  description: "Replaces every W with T.",
  run: (value) => String(value).split("W").join("T"),
});
