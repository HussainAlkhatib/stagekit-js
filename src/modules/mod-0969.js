'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0969",
  name: "Replace \"d\" with \"U\"",
  description: "Replaces every d with U.",
  run: (value) => String(value).split("d").join("U"),
});
