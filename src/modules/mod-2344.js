'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2344",
  name: "Replace \"y\" with \"d\"",
  description: "Replaces every y with d.",
  run: (value) => String(value).split("y").join("d"),
});
