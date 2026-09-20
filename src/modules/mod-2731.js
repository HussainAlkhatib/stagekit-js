'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2731",
  name: "Replace \"E\" with \"y\"",
  description: "Replaces every E with y.",
  run: (value) => String(value).split("E").join("y"),
});
