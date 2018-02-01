require('dotenv').config()

let [, ,
	FUNCTION_NAME,
	IAM_KEY,
	IAM_SECRET,
	IAM_REGION
] = process.argv

FUNCTION_NAME = FUNCTION_NAME || process.env.FUNCTION_NAME
IAM_KEY = IAM_KEY || process.env.IAM_KEY
IAM_SECRET = IAM_SECRET || process.env.IAM_SECRET
IAM_REGION = IAM_REGION || process.env.IAM_REGION

if (!FUNCTION_NAME || !IAM_KEY || !IAM_SECRET || !IAM_REGION) {
	return
}

const gulp = require('gulp')
const lambda = require('gulp-aws-lambda')
const zip = require('gulp-zip')

const credentials = {
	accessKeyId: IAM_KEY,
	secretAccessKey: IAM_SECRET,
	region: IAM_REGION
}
const options = {
	FunctionName: FUNCTION_NAME,
	Handler: 'lambda.handler',
	Description: 'Templates for ooapp.co'
}

gulp.src('dist/lambda.js')
.pipe(zip('lambda.zip'))
.pipe(lambda(credentials, options))
