'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3690",
  name: "Replace \"U\" with \"h\"",
  description: "Replaces every U with h.",
  run: (value) => String(value).split("U").join("h"),
});
