'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3585",
  name: "Replace \"S\" with \"y\"",
  description: "Replaces every S with y.",
  run: (value) => String(value).split("S").join("y"),
});
