'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1796",
  name: "Replace \"p\" with \"e\"",
  description: "Replaces every p with e.",
  run: (value) => String(value).split("p").join("e"),
});
