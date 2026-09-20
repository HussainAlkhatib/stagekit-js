'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1348",
  name: "Replace \"h\" with \"T\"",
  description: "Replaces every h with T.",
  run: (value) => String(value).split("h").join("T"),
});
