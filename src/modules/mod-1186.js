'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1186",
  name: "Replace \"f\" with \"e\"",
  description: "Replaces every f with e.",
  run: (value) => String(value).split("f").join("e"),
});
