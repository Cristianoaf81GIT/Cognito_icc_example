import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface CognitoStageProps extends cdk.StackProps {
  branch: string;
}

export class CognitoStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: CognitoStageProps) {
    super(scope, id, props);
  }
}