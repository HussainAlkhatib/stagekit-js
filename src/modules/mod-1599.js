'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1599",
  name: "Replace \"l\" with \"0\"",
  description: "Replaces every l with 0.",
  run: (value) => String(value).split("l").join("0"),
});
