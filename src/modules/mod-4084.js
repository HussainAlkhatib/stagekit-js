'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4084",
  name: "Replace \"0\" with \"J\"",
  description: "Replaces every 0 with J.",
  run: (value) => String(value).split("0").join("J"),
});
