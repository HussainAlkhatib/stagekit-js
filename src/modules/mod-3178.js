'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3178",
  name: "Replace \"L\" with \"T\"",
  description: "Replaces every L with T.",
  run: (value) => String(value).split("L").join("T"),
});
