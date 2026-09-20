'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1836",
  name: "Replace \"p\" with \"T\"",
  description: "Replaces every p with T.",
  run: (value) => String(value).split("p").join("T"),
});
