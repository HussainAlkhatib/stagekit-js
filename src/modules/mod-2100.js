'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2100",
  name: "Replace \"u\" with \"d\"",
  description: "Replaces every u with d.",
  run: (value) => String(value).split("u").join("d"),
});
