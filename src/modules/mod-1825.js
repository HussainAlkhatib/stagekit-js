'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1825",
  name: "Replace \"p\" with \"I\"",
  description: "Replaces every p with I.",
  run: (value) => String(value).split("p").join("I"),
});
