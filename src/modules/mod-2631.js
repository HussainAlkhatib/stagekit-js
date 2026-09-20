'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2631",
  name: "Replace \"C\" with \"V\"",
  description: "Replaces every C with V.",
  run: (value) => String(value).split("C").join("V"),
});
