'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0010",
  name: "Wrap in ()",
  description: "Wraps the value in ().",
  run: (value) => "(" + String(value) + ")",
});
