import { App, Stack } from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import S3DefaultEncryptionSSE from '../src/rules/S3DefaultEncryptionSSE';

test('Non-Complient Bucket', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const bucket = new CfnBucket(stack, 'Bucket', {
  });
  expect(S3DefaultEncryptionSSE(bucket)).toBe('Non-Compliant');
});

test('Complient Bucket', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const bucket = new CfnBucket(stack, 'Bucket', {
    bucketEncryption: {
      serverSideEncryptionConfiguration: [
        {
          serverSideEncryptionByDefault: {
            sseAlgorithm: 'AES256',
          },
        },
      ],
    },
  });
  expect(S3DefaultEncryptionSSE(bucket)).toBe('Compliant');
});
