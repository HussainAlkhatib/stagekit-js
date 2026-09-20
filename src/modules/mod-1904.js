'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1904",
  name: "Replace \"q\" with \"0\"",
  description: "Replaces every q with 0.",
  run: (value) => String(value).split("q").join("0"),
});
