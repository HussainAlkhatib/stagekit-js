'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1433",
  name: "Replace \"j\" with \"h\"",
  description: "Replaces every j with h.",
  run: (value) => String(value).split("j").join("h"),
});
