'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1472",
  name: "Replace \"j\" with \"V\"",
  description: "Replaces every j with V.",
  run: (value) => String(value).split("j").join("V"),
});
