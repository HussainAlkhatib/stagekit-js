'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1237",
  name: "Replace \"f\" with \"4\"",
  description: "Replaces every f with 4.",
  run: (value) => String(value).split("f").join("4"),
});
