'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3716",
  name: "Replace \"U\" with \"H\"",
  description: "Replaces every U with H.",
  run: (value) => String(value).split("U").join("H"),
});
