import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Julian Michel',
  authorAddress: 'mail@julianmichel.de',
  cdkVersion: '2.116.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: '@jumic/cdk-nag-custom-rules',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mail/cdk-nag-custom-rules.git',

  releaseToNpm: true,
  npmAccess: NpmAccess.RESTRICTED,

  peerDeps: ['cdk-nag'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();