'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2629",
  name: "Replace \"C\" with \"T\"",
  description: "Replaces every C with T.",
  run: (value) => String(value).split("C").join("T"),
});
