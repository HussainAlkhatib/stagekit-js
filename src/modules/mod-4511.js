'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4511",
  name: "Replace \"7\" with \"J\"",
  description: "Replaces every 7 with J.",
  run: (value) => String(value).split("7").join("J"),
});
