'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4296",
  name: "Replace \"4\" with \"d\"",
  description: "Replaces every 4 with d.",
  run: (value) => String(value).split("4").join("d"),
});
