'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3702",
  name: "Replace \"U\" with \"t\"",
  description: "Replaces every U with t.",
  run: (value) => String(value).split("U").join("t"),
});
