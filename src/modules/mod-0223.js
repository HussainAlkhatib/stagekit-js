'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0223",
  name: "Drop first 2 lines",
  description: "Drops the first 2 lines.",
  run: (value) => String(value).split('\n').slice(2).join('\n'),
});
