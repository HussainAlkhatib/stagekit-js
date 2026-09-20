'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2619",
  name: "Replace \"C\" with \"J\"",
  description: "Replaces every C with J.",
  run: (value) => String(value).split("C").join("J"),
});
