'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1899",
  name: "Replace \"q\" with \"V\"",
  description: "Replaces every q with V.",
  run: (value) => String(value).split("q").join("V"),
});
