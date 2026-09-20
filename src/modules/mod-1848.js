'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1848",
  name: "Replace \"p\" with \"5\"",
  description: "Replaces every p with 5.",
  run: (value) => String(value).split("p").join("5"),
});
