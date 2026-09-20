'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3809",
  name: "Replace \"W\" with \"e\"",
  description: "Replaces every W with e.",
  run: (value) => String(value).split("W").join("e"),
});
