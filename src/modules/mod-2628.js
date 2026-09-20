'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2628",
  name: "Replace \"C\" with \"S\"",
  description: "Replaces every C with S.",
  run: (value) => String(value).split("C").join("S"),
});
