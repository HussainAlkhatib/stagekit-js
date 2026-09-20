'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1932",
  name: "Replace \"r\" with \"t\"",
  description: "Replaces every r with t.",
  run: (value) => String(value).split("r").join("t"),
});
