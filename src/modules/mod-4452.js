'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4452",
  name: "Replace \"6\" with \"L\"",
  description: "Replaces every 6 with L.",
  run: (value) => String(value).split("6").join("L"),
});
