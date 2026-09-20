'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4094",
  name: "Replace \"0\" with \"T\"",
  description: "Replaces every 0 with T.",
  run: (value) => String(value).split("0").join("T"),
});
