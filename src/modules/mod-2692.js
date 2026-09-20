'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2692",
  name: "Replace \"D\" with \"V\"",
  description: "Replaces every D with V.",
  run: (value) => String(value).split("D").join("V"),
});
