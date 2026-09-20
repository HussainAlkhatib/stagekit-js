'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2266",
  name: "Replace \"w\" with \"W\"",
  description: "Replaces every w with W.",
  run: (value) => String(value).split("w").join("W"),
});
