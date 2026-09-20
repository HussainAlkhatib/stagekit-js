'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1843",
  name: "Replace \"p\" with \"0\"",
  description: "Replaces every p with 0.",
  run: (value) => String(value).split("p").join("0"),
});
