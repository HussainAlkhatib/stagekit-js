'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2818",
  name: "Replace \"F\" with \"Z\"",
  description: "Replaces every F with Z.",
  run: (value) => String(value).split("F").join("Z"),
});
