'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4012",
  name: "Replace \"Z\" with \"y\"",
  description: "Replaces every Z with y.",
  run: (value) => String(value).split("Z").join("y"),
});
