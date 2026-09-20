'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2202",
  name: "Replace \"v\" with \"T\"",
  description: "Replaces every v with T.",
  run: (value) => String(value).split("v").join("T"),
});
