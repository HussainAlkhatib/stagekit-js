'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1426",
  name: "Replace \"j\" with \"a\"",
  description: "Replaces every j with a.",
  run: (value) => String(value).split("j").join("a"),
});
