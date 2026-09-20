'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3849",
  name: "Replace \"W\" with \"S\"",
  description: "Replaces every W with S.",
  run: (value) => String(value).split("W").join("S"),
});
