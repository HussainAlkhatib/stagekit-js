'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1446",
  name: "Replace \"j\" with \"v\"",
  description: "Replaces every j with v.",
  run: (value) => String(value).split("j").join("v"),
});
