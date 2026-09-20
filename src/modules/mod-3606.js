'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3606",
  name: "Replace \"S\" with \"U\"",
  description: "Replaces every S with U.",
  run: (value) => String(value).split("S").join("U"),
});
