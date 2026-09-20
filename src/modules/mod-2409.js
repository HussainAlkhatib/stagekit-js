'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2409",
  name: "Replace \"z\" with \"h\"",
  description: "Replaces every z with h.",
  run: (value) => String(value).split("z").join("h"),
});
