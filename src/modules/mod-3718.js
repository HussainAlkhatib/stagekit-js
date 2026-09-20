'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3718",
  name: "Replace \"U\" with \"J\"",
  description: "Replaces every U with J.",
  run: (value) => String(value).split("U").join("J"),
});
