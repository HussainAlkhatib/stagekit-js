'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2142",
  name: "Replace \"u\" with \"U\"",
  description: "Replaces every u with U.",
  run: (value) => String(value).split("u").join("U"),
});
