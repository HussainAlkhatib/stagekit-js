'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0026",
  name: "Indent by 2",
  description: "Indents every line by 2 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(2) + line).join('\n'),
});
