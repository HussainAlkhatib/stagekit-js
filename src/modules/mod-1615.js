'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1615",
  name: "Replace \"m\" with \"g\"",
  description: "Replaces every m with g.",
  run: (value) => String(value).split("m").join("g"),
});
