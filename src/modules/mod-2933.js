'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2933",
  name: "Replace \"H\" with \"S\"",
  description: "Replaces every H with S.",
  run: (value) => String(value).split("H").join("S"),
});
