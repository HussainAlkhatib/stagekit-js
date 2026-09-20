'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3725",
  name: "Replace \"U\" with \"Q\"",
  description: "Replaces every U with Q.",
  run: (value) => String(value).split("U").join("Q"),
});
