'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2689",
  name: "Replace \"D\" with \"S\"",
  description: "Replaces every D with S.",
  run: (value) => String(value).split("D").join("S"),
});
