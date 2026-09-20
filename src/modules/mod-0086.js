'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0086",
  name: "Replace \"a\" with \"g\"",
  description: "Replaces every a with g.",
  run: (value) => String(value).split("a").join("g"),
});
