'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2897",
  name: "Replace \"H\" with \"h\"",
  description: "Replaces every H with h.",
  run: (value) => String(value).split("H").join("h"),
});
