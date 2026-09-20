'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2594",
  name: "Replace \"C\" with \"j\"",
  description: "Replaces every C with j.",
  run: (value) => String(value).split("C").join("j"),
});
