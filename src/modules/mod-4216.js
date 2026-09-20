'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4216",
  name: "Replace \"2\" with \"T\"",
  description: "Replaces every 2 with T.",
  run: (value) => String(value).split("2").join("T"),
});
