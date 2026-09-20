'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1441",
  name: "Replace \"j\" with \"q\"",
  description: "Replaces every j with q.",
  run: (value) => String(value).split("j").join("q"),
});
