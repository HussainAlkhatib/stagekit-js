'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2918",
  name: "Replace \"H\" with \"C\"",
  description: "Replaces every H with C.",
  run: (value) => String(value).split("H").join("C"),
});
