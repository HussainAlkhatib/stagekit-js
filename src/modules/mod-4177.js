'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4177",
  name: "Replace \"2\" with \"g\"",
  description: "Replaces every 2 with g.",
  run: (value) => String(value).split("2").join("g"),
});
