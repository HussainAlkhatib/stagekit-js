'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2954",
  name: "Replace \"I\" with \"d\"",
  description: "Replaces every I with d.",
  run: (value) => String(value).split("I").join("d"),
});
