'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2252",
  name: "Replace \"w\" with \"I\"",
  description: "Replaces every w with I.",
  run: (value) => String(value).split("w").join("I"),
});
