'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3278",
  name: "Replace \"N\" with \"w\"",
  description: "Replaces every N with w.",
  run: (value) => String(value).split("N").join("w"),
});
