'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0077",
  name: "Indent by 5",
  description: "Indents every line by 5 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(5) + line).join('\n'),
});
