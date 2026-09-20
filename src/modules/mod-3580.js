'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3580",
  name: "Replace \"S\" with \"t\"",
  description: "Replaces every S with t.",
  run: (value) => String(value).split("S").join("t"),
});
