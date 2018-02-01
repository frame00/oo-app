const [, ,
	FUNCTION_NAME,
	IAM_KEY,
	IAM_SECRET,
	IAM_REGION
] = process.argv

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