'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2588",
  name: "Replace \"C\" with \"d\"",
  description: "Replaces every C with d.",
  run: (value) => String(value).split("C").join("d"),
});
