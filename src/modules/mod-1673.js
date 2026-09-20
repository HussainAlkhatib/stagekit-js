'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1673",
  name: "Replace \"n\" with \"d\"",
  description: "Replaces every n with d.",
  run: (value) => String(value).split("n").join("d"),
});
