'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2771",
  name: "Replace \"F\" with \"d\"",
  description: "Replaces every F with d.",
  run: (value) => String(value).split("F").join("d"),
});
