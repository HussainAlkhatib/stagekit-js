'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1479",
  name: "Replace \"j\" with \"2\"",
  description: "Replaces every j with 2.",
  run: (value) => String(value).split("j").join("2"),
});
