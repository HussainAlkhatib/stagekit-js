'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3808",
  name: "Replace \"W\" with \"d\"",
  description: "Replaces every W with d.",
  run: (value) => String(value).split("W").join("d"),
});
