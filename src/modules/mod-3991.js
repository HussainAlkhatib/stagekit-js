'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3991",
  name: "Replace \"Z\" with \"d\"",
  description: "Replaces every Z with d.",
  run: (value) => String(value).split("Z").join("d"),
});
