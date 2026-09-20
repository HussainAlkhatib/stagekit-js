'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2230",
  name: "Replace \"w\" with \"l\"",
  description: "Replaces every w with l.",
  run: (value) => String(value).split("w").join("l"),
});
