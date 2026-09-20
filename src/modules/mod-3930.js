'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3930",
  name: "Replace \"Y\" with \"d\"",
  description: "Replaces every Y with d.",
  run: (value) => String(value).split("Y").join("d"),
});
