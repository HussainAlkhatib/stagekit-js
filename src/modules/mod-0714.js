'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0714",
  name: "Replace \"c\" with \"w\"",
  description: "Replaces every c with w.",
  run: (value) => String(value).split("c").join("w"),
});
