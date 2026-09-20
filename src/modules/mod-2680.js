'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2680",
  name: "Replace \"D\" with \"J\"",
  description: "Replaces every D with J.",
  run: (value) => String(value).split("D").join("J"),
});
