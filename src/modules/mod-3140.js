'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3140",
  name: "Replace \"L\" with \"g\"",
  description: "Replaces every L with g.",
  run: (value) => String(value).split("L").join("g"),
});
