'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0182",
  name: "Prefix \":\"",
  description: "Prepends \":\" to the value.",
  run: (value) => ":" + String(value),
});
