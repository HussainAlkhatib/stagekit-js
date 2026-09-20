'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1959",
  name: "Replace \"r\" with \"U\"",
  description: "Replaces every r with U.",
  run: (value) => String(value).split("r").join("U"),
});
