'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4601",
  name: "Replace \"9\" with \"d\"",
  description: "Replaces every 9 with d.",
  run: (value) => String(value).split("9").join("d"),
});
