'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4006",
  name: "Replace \"Z\" with \"s\"",
  description: "Replaces every Z with s.",
  run: (value) => String(value).split("Z").join("s"),
});
