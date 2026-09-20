'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3605",
  name: "Replace \"S\" with \"T\"",
  description: "Replaces every S with T.",
  run: (value) => String(value).split("S").join("T"),
});
