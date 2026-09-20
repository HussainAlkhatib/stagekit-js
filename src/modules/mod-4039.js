'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4039",
  name: "Replace \"Z\" with \"0\"",
  description: "Replaces every Z with 0.",
  run: (value) => String(value).split("Z").join("0"),
});
