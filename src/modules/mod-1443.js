'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1443",
  name: "Replace \"j\" with \"s\"",
  description: "Replaces every j with s.",
  run: (value) => String(value).split("j").join("s"),
});
