'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1933",
  name: "Replace \"r\" with \"u\"",
  description: "Replaces every r with u.",
  run: (value) => String(value).split("r").join("u"),
});
