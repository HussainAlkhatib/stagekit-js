'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3727",
  name: "Replace \"U\" with \"S\"",
  description: "Replaces every U with S.",
  run: (value) => String(value).split("U").join("S"),
});
