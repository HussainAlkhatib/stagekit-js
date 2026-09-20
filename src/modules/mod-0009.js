'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0009",
  name: "Indent by 1",
  description: "Indents every line by 1 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(1) + line).join('\n'),
});
