'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1853",
  name: "Replace \"q\" with \"a\"",
  description: "Replaces every q with a.",
  run: (value) => String(value).split("q").join("a"),
});
