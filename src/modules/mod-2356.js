'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2356",
  name: "Replace \"y\" with \"p\"",
  description: "Replaces every y with p.",
  run: (value) => String(value).split("y").join("p"),
});
