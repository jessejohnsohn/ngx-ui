module.exports = {
  name: 'shared-ngx-ui-bootstrap',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/ngx-ui/bootstrap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
