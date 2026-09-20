'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0699",
  name: "Replace \"c\" with \"r\"",
  description: "Replaces every c with r.",
  run: (value) => String(value).split("c").join("r"),
});
