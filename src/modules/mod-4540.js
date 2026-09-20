'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4540",
  name: "Replace \"8\" with \"d\"",
  description: "Replaces every 8 with d.",
  run: (value) => String(value).split("8").join("d"),
});
