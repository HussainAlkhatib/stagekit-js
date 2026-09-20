'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2457",
  name: "Replace \"z\" with \"4\"",
  description: "Replaces every z with 4.",
  run: (value) => String(value).split("z").join("4"),
});
