'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1699",
  name: "Replace \"n\" with \"E\"",
  description: "Replaces every n with E.",
  run: (value) => String(value).split("n").join("E"),
});
