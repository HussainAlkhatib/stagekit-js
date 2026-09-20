'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0017",
  name: "Mirror",
  description: "Appends the reversed value.",
  run: (value) => String(value) + String(value).split('').reverse().join(''),
});
