'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4041",
  name: "Replace \"Z\" with \"2\"",
  description: "Replaces every Z with 2.",
  run: (value) => String(value).split("Z").join("2"),
});
