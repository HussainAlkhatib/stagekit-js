'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2589",
  name: "Replace \"C\" with \"e\"",
  description: "Replaces every C with e.",
  run: (value) => String(value).split("C").join("e"),
});
