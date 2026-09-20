'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4441",
  name: "Replace \"6\" with \"A\"",
  description: "Replaces every 6 with A.",
  run: (value) => String(value).split("6").join("A"),
});
