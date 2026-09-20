'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0111",
  name: "Indent by 7",
  description: "Indents every line by 7 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(7) + line).join('\n'),
});
