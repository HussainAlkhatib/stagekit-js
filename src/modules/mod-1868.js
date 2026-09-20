'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1868",
  name: "Replace \"q\" with \"p\"",
  description: "Replaces every q with p.",
  run: (value) => String(value).split("q").join("p"),
});
