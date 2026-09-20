'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2618",
  name: "Replace \"C\" with \"I\"",
  description: "Replaces every C with I.",
  run: (value) => String(value).split("C").join("I"),
});
