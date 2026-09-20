'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2164",
  name: "Replace \"v\" with \"g\"",
  description: "Replaces every v with g.",
  run: (value) => String(value).split("v").join("g"),
});
