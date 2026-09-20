'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1463",
  name: "Replace \"j\" with \"M\"",
  description: "Replaces every j with M.",
  run: (value) => String(value).split("j").join("M"),
});
