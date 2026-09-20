'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0921",
  name: "Replace \"d\" with \"E\"",
  description: "Replaces every d with E.",
  run: (value) => String(value).split("d").join("E"),
});
