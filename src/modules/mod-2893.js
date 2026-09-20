'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2893",
  name: "Replace \"H\" with \"d\"",
  description: "Replaces every H with d.",
  run: (value) => String(value).split("H").join("d"),
});
