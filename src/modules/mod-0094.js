'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0094",
  name: "Indent by 6",
  description: "Indents every line by 6 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(6) + line).join('\n'),
});
