'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1835",
  name: "Replace \"p\" with \"S\"",
  description: "Replaces every p with S.",
  run: (value) => String(value).split("p").join("S"),
});
