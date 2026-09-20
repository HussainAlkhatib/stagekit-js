'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2222",
  name: "Replace \"w\" with \"d\"",
  description: "Replaces every w with d.",
  run: (value) => String(value).split("w").join("d"),
});
