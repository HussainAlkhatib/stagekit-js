'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2909",
  name: "Replace \"H\" with \"t\"",
  description: "Replaces every H with t.",
  run: (value) => String(value).split("H").join("t"),
});
