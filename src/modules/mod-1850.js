'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1850",
  name: "Replace \"p\" with \"7\"",
  description: "Replaces every p with 7.",
  run: (value) => String(value).split("p").join("7"),
});
