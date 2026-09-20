'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2614",
  name: "Replace \"C\" with \"E\"",
  description: "Replaces every C with E.",
  run: (value) => String(value).split("C").join("E"),
});
