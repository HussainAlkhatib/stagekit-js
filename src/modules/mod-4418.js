'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4418",
  name: "Replace \"6\" with \"d\"",
  description: "Replaces every 6 with d.",
  run: (value) => String(value).split("6").join("d"),
});
