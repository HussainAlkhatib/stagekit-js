'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0930",
  name: "Replace \"d\" with \"H\"",
  description: "Replaces every d with H.",
  run: (value) => String(value).split("d").join("H"),
});
