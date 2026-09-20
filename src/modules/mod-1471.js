'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1471",
  name: "Replace \"j\" with \"U\"",
  description: "Replaces every j with U.",
  run: (value) => String(value).split("j").join("U"),
});
