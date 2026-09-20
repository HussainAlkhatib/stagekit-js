'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2264",
  name: "Replace \"w\" with \"U\"",
  description: "Replaces every w with U.",
  run: (value) => String(value).split("w").join("U"),
});
