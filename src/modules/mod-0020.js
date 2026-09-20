'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0020",
  name: "Prefix \"_\"",
  description: "Prepends \"_\" to the value.",
  run: (value) => "_" + String(value),
});
