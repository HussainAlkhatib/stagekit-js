'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3814",
  name: "Replace \"W\" with \"j\"",
  description: "Replaces every W with j.",
  run: (value) => String(value).split("W").join("j"),
});
