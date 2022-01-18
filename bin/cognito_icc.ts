#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline/pipeline-stack';
import * as dotenv from 'dotenv';

dotenv.config();


const app = new cdk.App();

new PipelineStack(app, 'CognitoDevPipelineStack', {
  branch: 'dev',
  awsRegion: `us-east-1`,
  awsAccount: `151783411801`,
  env: {
    account: `315153108667`,
    region: `us-east-1`
  }
});

new PipelineStack(app, 'CognitoProdPipelineStack', {
  branch: 'prod',
  awsRegion: `us-east-1`,
  awsAccount: `935548450654`,
  env: {
    account: `315153108667`,
    region: `us-east-1`
  }
});

app.synth();