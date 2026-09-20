'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0325",
  name: "Drop first 6 lines",
  description: "Drops the first 6 lines.",
  run: (value) => String(value).split('\n').slice(6).join('\n'),
});
