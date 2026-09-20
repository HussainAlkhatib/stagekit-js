'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3992",
  name: "Replace \"Z\" with \"e\"",
  description: "Replaces every Z with e.",
  run: (value) => String(value).split("Z").join("e"),
});
