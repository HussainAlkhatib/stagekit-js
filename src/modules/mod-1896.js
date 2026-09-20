'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1896",
  name: "Replace \"q\" with \"S\"",
  description: "Replaces every q with S.",
  run: (value) => String(value).split("q").join("S"),
});
