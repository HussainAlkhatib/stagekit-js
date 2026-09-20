'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2507",
  name: "Replace \"A\" with \"T\"",
  description: "Replaces every A with T.",
  run: (value) => String(value).split("A").join("T"),
});
