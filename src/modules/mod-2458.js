'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2458",
  name: "Replace \"z\" with \"5\"",
  description: "Replaces every z with 5.",
  run: (value) => String(value).split("z").join("5"),
});
