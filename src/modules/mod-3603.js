'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3603",
  name: "Replace \"S\" with \"Q\"",
  description: "Replaces every S with Q.",
  run: (value) => String(value).split("S").join("Q"),
});
