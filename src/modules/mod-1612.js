'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1612",
  name: "Replace \"m\" with \"d\"",
  description: "Replaces every m with d.",
  run: (value) => String(value).split("m").join("d"),
});
