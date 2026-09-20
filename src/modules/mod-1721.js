'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1721",
  name: "Replace \"n\" with \"0\"",
  description: "Replaces every n with 0.",
  run: (value) => String(value).split("n").join("0"),
});
