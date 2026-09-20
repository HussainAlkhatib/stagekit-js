'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1833",
  name: "Replace \"p\" with \"Q\"",
  description: "Replaces every p with Q.",
  run: (value) => String(value).split("p").join("Q"),
});
