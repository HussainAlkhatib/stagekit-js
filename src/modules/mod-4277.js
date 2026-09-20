'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4277",
  name: "Replace \"3\" with \"T\"",
  description: "Replaces every 3 with T.",
  run: (value) => String(value).split("3").join("T"),
});
