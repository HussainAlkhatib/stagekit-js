'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2228",
  name: "Replace \"w\" with \"j\"",
  description: "Replaces every w with j.",
  run: (value) => String(value).split("w").join("j"),
});
