'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4357",
  name: "Replace \"5\" with \"d\"",
  description: "Replaces every 5 with d.",
  run: (value) => String(value).split("5").join("d"),
});
