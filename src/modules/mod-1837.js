'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1837",
  name: "Replace \"p\" with \"U\"",
  description: "Replaces every p with U.",
  run: (value) => String(value).split("p").join("U"),
});
