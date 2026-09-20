'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2089",
  name: "Replace \"t\" with \"2\"",
  description: "Replaces every t with 2.",
  run: (value) => String(value).split("t").join("2"),
});
