'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2419",
  name: "Replace \"z\" with \"r\"",
  description: "Replaces every z with r.",
  run: (value) => String(value).split("z").join("r"),
});
