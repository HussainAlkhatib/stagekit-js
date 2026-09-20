'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2009",
  name: "Replace \"s\" with \"J\"",
  description: "Replaces every s with J.",
  run: (value) => String(value).split("s").join("J"),
});
