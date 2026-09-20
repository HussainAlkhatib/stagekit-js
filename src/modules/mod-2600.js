'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2600",
  name: "Replace \"C\" with \"p\"",
  description: "Replaces every C with p.",
  run: (value) => String(value).split("C").join("p"),
});
