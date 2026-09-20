'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3994",
  name: "Replace \"Z\" with \"g\"",
  description: "Replaces every Z with g.",
  run: (value) => String(value).split("Z").join("g"),
});
