'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4140",
  name: "Replace \"1\" with \"E\"",
  description: "Replaces every 1 with E.",
  run: (value) => String(value).split("1").join("E"),
});
