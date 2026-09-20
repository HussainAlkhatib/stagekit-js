'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2517",
  name: "Replace \"A\" with \"3\"",
  description: "Replaces every A with 3.",
  run: (value) => String(value).split("A").join("3"),
});
