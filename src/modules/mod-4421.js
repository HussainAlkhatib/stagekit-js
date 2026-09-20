'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4421",
  name: "Replace \"6\" with \"g\"",
  description: "Replaces every 6 with g.",
  run: (value) => String(value).split("6").join("g"),
});
