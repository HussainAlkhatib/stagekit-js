'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3042",
  name: "Replace \"J\" with \"E\"",
  description: "Replaces every J with E.",
  run: (value) => String(value).split("J").join("E"),
});
