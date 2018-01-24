#!/bin/bash
if ["$TRAVIS_BRANCH" == "master"] || ["$TRAVIS_PULL_REQUEST_BRANCH" == "master"]
then

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths '/*' 2>&1
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
  -H "X-Auth-Email: $CLOUDFLARE_AUTH_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}' \
  2>&1
aws s3api copy-object --bucket $HACKILLINOIS_BUCKET_NAME --content-type "application/json" --copy-source $HACKILLINOIS_BUCKET_NAME/apple-app-site-association --key apple-app-site-association --metadata-directive "REPLACE"

else

aws s3api copy-object --bucket $HACKILLINOIS_TEST_BUCKET_NAME --content-type "application/json" --copy-source $HACKILLINOIS_TEST_BUCKET_NAME/apple-app-site-association --key apple-app-site-association --metadata-directive "REPLACE"

fi
