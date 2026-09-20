'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3705",
  name: "Replace \"U\" with \"w\"",
  description: "Replaces every U with w.",
  run: (value) => String(value).split("U").join("w"),
});
