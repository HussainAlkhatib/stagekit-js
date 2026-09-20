'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3167",
  name: "Replace \"L\" with \"H\"",
  description: "Replaces every L with H.",
  run: (value) => String(value).split("L").join("H"),
});
