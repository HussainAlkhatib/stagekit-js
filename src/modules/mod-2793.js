'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2793",
  name: "Replace \"F\" with \"z\"",
  description: "Replaces every F with z.",
  run: (value) => String(value).split("F").join("z"),
});
