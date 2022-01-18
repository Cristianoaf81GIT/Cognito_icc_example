const AWS = require('aws-sdk')
const AWSXRay = require('aws-xray-sdk-core')
const xRay = AWSXRay.captureAWS(require('aws-sdk'))
const awsRegion = process.env.AWS_REGION

AWS.config.update({
  region: awsRegion,
});

exports.handler = async function (event, context) {
  console.log(event)
  if (event.request.userAttributes.email === 'cristiano.alexandrefaria81@gmail.com') {
    throw new Error('this user is blocked');
  }
  context.done(null, event)
};