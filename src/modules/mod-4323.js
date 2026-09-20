'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4323",
  name: "Replace \"4\" with \"E\"",
  description: "Replaces every 4 with E.",
  run: (value) => String(value).split("4").join("E"),
});
