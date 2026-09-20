'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2823",
  name: "Replace \"F\" with \"4\"",
  description: "Replaces every F with 4.",
  run: (value) => String(value).split("F").join("4"),
});
