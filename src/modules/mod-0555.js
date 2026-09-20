'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0555",
  name: "Replace \"b\" with \"E\"",
  description: "Replaces every b with E.",
  run: (value) => String(value).split("b").join("E"),
});
