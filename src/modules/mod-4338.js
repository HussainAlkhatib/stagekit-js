'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4338",
  name: "Replace \"4\" with \"T\"",
  description: "Replaces every 4 with T.",
  run: (value) => String(value).split("4").join("T"),
});
