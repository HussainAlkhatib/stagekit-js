'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1665",
  name: "Replace \"m\" with \"5\"",
  description: "Replaces every m with 5.",
  run: (value) => String(value).split("m").join("5"),
});
