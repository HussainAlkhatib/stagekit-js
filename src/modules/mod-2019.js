'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2019",
  name: "Replace \"s\" with \"T\"",
  description: "Replaces every s with T.",
  run: (value) => String(value).split("s").join("T"),
});
