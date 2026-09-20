'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3032",
  name: "Replace \"J\" with \"u\"",
  description: "Replaces every J with u.",
  run: (value) => String(value).split("J").join("u"),
});
