#!/bin/bash
AWS_ACCESS_KEY_ID=$HACKILLINOIS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=$HACKILLINOIS_SECRET_ACCESS_KEY

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths '/*'
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
  -H "X-Auth-Email: $CLOUDFLARE_AUTH_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
