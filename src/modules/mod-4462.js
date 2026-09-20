'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4462",
  name: "Replace \"6\" with \"V\"",
  description: "Replaces every 6 with V.",
  run: (value) => String(value).split("6").join("V"),
});
