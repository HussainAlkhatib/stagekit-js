'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2752",
  name: "Replace \"E\" with \"U\"",
  description: "Replaces every E with U.",
  run: (value) => String(value).split("E").join("U"),
});
