'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1551",
  name: "Replace \"l\" with \"d\"",
  description: "Replaces every l with d.",
  run: (value) => String(value).split("l").join("d"),
});
