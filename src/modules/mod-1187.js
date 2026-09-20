'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1187",
  name: "Replace \"f\" with \"g\"",
  description: "Replaces every f with g.",
  run: (value) => String(value).split("f").join("g"),
});
