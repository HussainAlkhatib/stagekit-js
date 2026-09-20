'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2804",
  name: "Replace \"F\" with \"L\"",
  description: "Replaces every F with L.",
  run: (value) => String(value).split("F").join("L"),
});
