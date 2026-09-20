'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3058",
  name: "Replace \"J\" with \"V\"",
  description: "Replaces every J with V.",
  run: (value) => String(value).split("J").join("V"),
});
