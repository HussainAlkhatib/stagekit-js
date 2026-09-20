'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0043",
  name: "Indent by 3",
  description: "Indents every line by 3 spaces.",
  run: (value) => String(value).split('\n').map((line) => ' '.repeat(3) + line).join('\n'),
});
