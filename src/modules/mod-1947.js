'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1947",
  name: "Replace \"r\" with \"I\"",
  description: "Replaces every r with I.",
  run: (value) => String(value).split("r").join("I"),
});
