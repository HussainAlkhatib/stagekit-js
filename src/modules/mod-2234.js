'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2234",
  name: "Replace \"w\" with \"p\"",
  description: "Replaces every w with p.",
  run: (value) => String(value).split("w").join("p"),
});
