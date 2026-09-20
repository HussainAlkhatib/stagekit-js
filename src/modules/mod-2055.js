'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2055",
  name: "Replace \"t\" with \"u\"",
  description: "Replaces every t with u.",
  run: (value) => String(value).split("t").join("u"),
});
