'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1654",
  name: "Replace \"m\" with \"U\"",
  description: "Replaces every m with U.",
  run: (value) => String(value).split("m").join("U"),
});
