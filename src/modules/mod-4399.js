'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4399",
  name: "Replace \"5\" with \"T\"",
  description: "Replaces every 5 with T.",
  run: (value) => String(value).split("5").join("T"),
});
