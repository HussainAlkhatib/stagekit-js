'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1323",
  name: "Replace \"h\" with \"u\"",
  description: "Replaces every h with u.",
  run: (value) => String(value).split("h").join("u"),
});
