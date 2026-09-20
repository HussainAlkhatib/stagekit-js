'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2679",
  name: "Replace \"D\" with \"I\"",
  description: "Replaces every D with I.",
  run: (value) => String(value).split("D").join("I"),
});
