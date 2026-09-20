'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4003",
  name: "Replace \"Z\" with \"p\"",
  description: "Replaces every Z with p.",
  run: (value) => String(value).split("Z").join("p"),
});
