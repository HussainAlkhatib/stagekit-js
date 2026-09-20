'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2223",
  name: "Replace \"w\" with \"e\"",
  description: "Replaces every w with e.",
  run: (value) => String(value).split("w").join("e"),
});
