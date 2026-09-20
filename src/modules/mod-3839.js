'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3839",
  name: "Replace \"W\" with \"I\"",
  description: "Replaces every W with I.",
  run: (value) => String(value).split("W").join("I"),
});
