'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1653",
  name: "Replace \"m\" with \"T\"",
  description: "Replaces every m with T.",
  run: (value) => String(value).split("m").join("T"),
});
