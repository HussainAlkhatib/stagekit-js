'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2039",
  name: "Replace \"t\" with \"d\"",
  description: "Replaces every t with d.",
  run: (value) => String(value).split("t").join("d"),
});
