'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0786",
  name: "Replace \"c\" with \"U\"",
  description: "Replaces every c with U.",
  run: (value) => String(value).split("c").join("U"),
});
