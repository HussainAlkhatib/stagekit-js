'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1459",
  name: "Replace \"j\" with \"I\"",
  description: "Replaces every j with I.",
  run: (value) => String(value).split("j").join("I"),
});
