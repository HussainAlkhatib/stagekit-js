'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1714",
  name: "Replace \"n\" with \"T\"",
  description: "Replaces every n with T.",
  run: (value) => String(value).split("n").join("T"),
});
