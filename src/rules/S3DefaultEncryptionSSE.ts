import { parse } from 'path';
import { CfnResource, Stack } from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';
import { NagRuleCompliance, NagRules } from 'cdk-nag/lib';

/**
 * S3 Buckets are encrypted S3 SSE encryption
 * @param node the CfnResource to check
 */
export default Object.defineProperty(
  (node: CfnResource): NagRuleCompliance => {
    if (node instanceof CfnBucket) {
      if (node.bucketEncryption == undefined) {
        return NagRuleCompliance.NON_COMPLIANT;
      }
      const encryption = Stack.of(node).resolve(node.bucketEncryption);
      if (encryption.serverSideEncryptionConfiguration == undefined) {
        return NagRuleCompliance.NON_COMPLIANT;
      }
      const sse = Stack.of(node).resolve(
        encryption.serverSideEncryptionConfiguration,
      );
      for (const rule of sse) {
        const defaultEncryption = Stack.of(node).resolve(
          rule.serverSideEncryptionByDefault,
        );
        if (defaultEncryption == undefined) {
          return NagRuleCompliance.NON_COMPLIANT;
        }
        const sseAlgorithm = NagRules.resolveIfPrimitive(
          node,
          defaultEncryption.sseAlgorithm,
        );
        if (sseAlgorithm != 'AES256') {
          return NagRuleCompliance.NON_COMPLIANT;
        }
      }
      return NagRuleCompliance.COMPLIANT;
    } else {
      return NagRuleCompliance.NOT_APPLICABLE;
    }
  },
  'name',
  { value: parse(__filename).name },
);