'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2268",
  name: "Replace \"w\" with \"Y\"",
  description: "Replaces every w with Y.",
  run: (value) => String(value).split("w").join("Y"),
});
