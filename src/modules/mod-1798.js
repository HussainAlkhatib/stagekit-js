'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1798",
  name: "Replace \"p\" with \"g\"",
  description: "Replaces every p with g.",
  run: (value) => String(value).split("p").join("g"),
});
