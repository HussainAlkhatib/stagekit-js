'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2461",
  name: "Replace \"z\" with \"8\"",
  description: "Replaces every z with 8.",
  run: (value) => String(value).split("z").join("8"),
});
