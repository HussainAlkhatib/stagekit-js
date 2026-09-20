'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3587",
  name: "Replace \"S\" with \"A\"",
  description: "Replaces every S with A.",
  run: (value) => String(value).split("S").join("A"),
});
