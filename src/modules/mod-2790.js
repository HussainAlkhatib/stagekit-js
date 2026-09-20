'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2790",
  name: "Replace \"F\" with \"w\"",
  description: "Replaces every F with w.",
  run: (value) => String(value).split("F").join("w"),
});
