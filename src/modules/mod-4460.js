'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4460",
  name: "Replace \"6\" with \"T\"",
  description: "Replaces every 6 with T.",
  run: (value) => String(value).split("6").join("T"),
});
