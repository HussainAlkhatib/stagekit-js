'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1216",
  name: "Replace \"f\" with \"J\"",
  description: "Replaces every f with J.",
  run: (value) => String(value).split("f").join("J"),
});
