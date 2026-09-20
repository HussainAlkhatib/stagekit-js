'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2483",
  name: "Replace \"A\" with \"u\"",
  description: "Replaces every A with u.",
  run: (value) => String(value).split("A").join("u"),
});
