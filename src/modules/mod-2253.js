'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2253",
  name: "Replace \"w\" with \"J\"",
  description: "Replaces every w with J.",
  run: (value) => String(value).split("w").join("J"),
});
