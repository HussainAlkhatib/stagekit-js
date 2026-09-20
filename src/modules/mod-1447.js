'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1447",
  name: "Replace \"j\" with \"w\"",
  description: "Replaces every j with w.",
  run: (value) => String(value).split("j").join("w"),
});
