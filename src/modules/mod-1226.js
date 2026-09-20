'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1226",
  name: "Replace \"f\" with \"T\"",
  description: "Replaces every f with T.",
  run: (value) => String(value).split("f").join("T"),
});
