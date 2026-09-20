'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0060",
  name: "Indent by 4",
  description: "Indents every line by 4 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(4) + line).join('\n'),
});
