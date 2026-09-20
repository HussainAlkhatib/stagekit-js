'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1803",
  name: "Replace \"p\" with \"l\"",
  description: "Replaces every p with l.",
  run: (value) => String(value).split("p").join("l"),
});
