'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2239",
  name: "Replace \"w\" with \"u\"",
  description: "Replaces every w with u.",
  run: (value) => String(value).split("w").join("u"),
});
