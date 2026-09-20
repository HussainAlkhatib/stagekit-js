'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2802",
  name: "Replace \"F\" with \"J\"",
  description: "Replaces every F with J.",
  run: (value) => String(value).split("F").join("J"),
});
