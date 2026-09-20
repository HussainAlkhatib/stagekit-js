'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2192",
  name: "Replace \"v\" with \"J\"",
  description: "Replaces every v with J.",
  run: (value) => String(value).split("v").join("J"),
});
