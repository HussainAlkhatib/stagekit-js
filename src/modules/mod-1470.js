'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1470",
  name: "Replace \"j\" with \"T\"",
  description: "Replaces every j with T.",
  run: (value) => String(value).split("j").join("T"),
});
