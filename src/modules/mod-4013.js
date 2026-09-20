'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4013",
  name: "Replace \"Z\" with \"z\"",
  description: "Replaces every Z with z.",
  run: (value) => String(value).split("Z").join("z"),
});
