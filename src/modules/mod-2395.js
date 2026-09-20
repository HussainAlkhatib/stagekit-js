'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2395",
  name: "Replace \"y\" with \"3\"",
  description: "Replaces every y with 3.",
  run: (value) => String(value).split("y").join("3"),
});
