'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2283",
  name: "Replace \"x\" with \"d\"",
  description: "Replaces every x with d.",
  run: (value) => String(value).split("x").join("d"),
});
