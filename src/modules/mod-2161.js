'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2161",
  name: "Replace \"v\" with \"d\"",
  description: "Replaces every v with d.",
  run: (value) => String(value).split("v").join("d"),
});
