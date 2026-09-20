'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1338",
  name: "Replace \"h\" with \"J\"",
  description: "Replaces every h with J.",
  run: (value) => String(value).split("h").join("J"),
});
