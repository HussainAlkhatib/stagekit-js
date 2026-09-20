'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2070",
  name: "Replace \"t\" with \"J\"",
  description: "Replaces every t with J.",
  run: (value) => String(value).split("t").join("J"),
});
