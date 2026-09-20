'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2492",
  name: "Replace \"A\" with \"E\"",
  description: "Replaces every A with E.",
  run: (value) => String(value).split("A").join("E"),
});
