'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4459",
  name: "Replace \"6\" with \"S\"",
  description: "Replaces every 6 with S.",
  run: (value) => String(value).split("6").join("S"),
});
