'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3015",
  name: "Replace \"J\" with \"d\"",
  description: "Replaces every J with d.",
  run: (value) => String(value).split("J").join("d"),
});
