'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2892",
  name: "Replace \"H\" with \"c\"",
  description: "Replaces every H with c.",
  run: (value) => String(value).split("H").join("c"),
});
