'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4256",
  name: "Replace \"3\" with \"y\"",
  description: "Replaces every 3 with y.",
  run: (value) => String(value).split("3").join("y"),
});
