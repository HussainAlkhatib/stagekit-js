'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0762",
  name: "Replace \"c\" with \"M\"",
  description: "Replaces every c with M.",
  run: (value) => String(value).split("c").join("M"),
});
