module.exports = {
  name: 'ngx-ui-material',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/ngx-ui/material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
