'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1716",
  name: "Replace \"n\" with \"V\"",
  description: "Replaces every n with V.",
  run: (value) => String(value).split("n").join("V"),
});
