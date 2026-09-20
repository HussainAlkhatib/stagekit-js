'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3459",
  name: "Replace \"Q\" with \"u\"",
  description: "Replaces every Q with u.",
  run: (value) => String(value).split("Q").join("u"),
});
