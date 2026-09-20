'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0128",
  name: "Indent by 8",
  description: "Indents every line by 8 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(8) + line).join('\n'),
});
