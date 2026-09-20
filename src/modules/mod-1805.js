'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1805",
  name: "Replace \"p\" with \"n\"",
  description: "Replaces every p with n.",
  run: (value) => String(value).split("p").join("n"),
});
