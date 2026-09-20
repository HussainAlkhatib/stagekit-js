'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4235",
  name: "Replace \"3\" with \"d\"",
  description: "Replaces every 3 with d.",
  run: (value) => String(value).split("3").join("d"),
});
