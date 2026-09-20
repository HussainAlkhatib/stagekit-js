'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2636",
  name: "Replace \"C\" with \"0\"",
  description: "Replaces every C with 0.",
  run: (value) => String(value).split("C").join("0"),
});
