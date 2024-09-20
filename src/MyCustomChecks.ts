import { CfnResource } from 'aws-cdk-lib';
import { NagMessageLevel, NagPack, NagPackProps, rules } from 'cdk-nag';
import { IConstruct } from 'constructs';
import S3DefaultEncryptionSSE from './rules/S3DefaultEncryptionSSE';

export class MyCustomChecks extends NagPack {
  constructor(props?: NagPackProps) {
    super(props);
    this.packName = 'MyCustom';
  }
  public visit(node: IConstruct): void {
    if (node instanceof CfnResource) {

      this.applyRule({
        info: 'SSL not enabled in this bucket.',
        explanation: 'SSL must be enabled to encrypt traffic.',
        level: NagMessageLevel.ERROR,
        rule: rules.s3.S3BucketSSLRequestsOnly,
        node: node,
      });

      this.applyRule({
        info: 'SSE encryption not set for this bucket',
        explanation: 'SSE encryption must be enabled to encrypt files in this bucket.',
        level: NagMessageLevel.ERROR,
        rule: S3DefaultEncryptionSSE,
        node: node,
      });

    }
  }
}