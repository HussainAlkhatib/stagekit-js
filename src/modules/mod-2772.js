'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2772",
  name: "Replace \"F\" with \"e\"",
  description: "Replaces every F with e.",
  run: (value) => String(value).split("F").join("e"),
});
