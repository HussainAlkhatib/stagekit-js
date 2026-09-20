'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2509",
  name: "Replace \"A\" with \"V\"",
  description: "Replaces every A with V.",
  run: (value) => String(value).split("A").join("V"),
});
