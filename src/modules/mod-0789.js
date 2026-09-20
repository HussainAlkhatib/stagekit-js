'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0789",
  name: "Replace \"c\" with \"V\"",
  description: "Replaces every c with V.",
  run: (value) => String(value).split("c").join("V"),
});
