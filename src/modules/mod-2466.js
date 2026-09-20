'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2466",
  name: "Replace \"A\" with \"d\"",
  description: "Replaces every A with d.",
  run: (value) => String(value).split("A").join("d"),
});
