'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3594",
  name: "Replace \"S\" with \"H\"",
  description: "Replaces every S with H.",
  run: (value) => String(value).split("S").join("H"),
});
