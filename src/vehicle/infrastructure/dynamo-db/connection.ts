import Dynamoose from 'dynamoose'

const IS_OFFLINE = process.env.IS_OFFLINE

if (IS_OFFLINE === 'true') {
	Dynamoose.aws.ddb.local()
} else {
	const ddb = new Dynamoose.aws.ddb.DynamoDB()
	Dynamoose.aws.ddb.set(ddb)
}
