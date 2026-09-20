'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3018",
  name: "Replace \"J\" with \"g\"",
  description: "Replaces every J with g.",
  run: (value) => String(value).split("J").join("g"),
});
