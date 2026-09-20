'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2774",
  name: "Replace \"F\" with \"g\"",
  description: "Replaces every F with g.",
  run: (value) => String(value).split("F").join("g"),
});
