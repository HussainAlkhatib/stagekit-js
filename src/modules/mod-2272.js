'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2272",
  name: "Replace \"w\" with \"2\"",
  description: "Replaces every w with 2.",
  run: (value) => String(value).split("w").join("2"),
});
