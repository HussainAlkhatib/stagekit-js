'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1628",
  name: "Replace \"m\" with \"u\"",
  description: "Replaces every m with u.",
  run: (value) => String(value).split("m").join("u"),
});
