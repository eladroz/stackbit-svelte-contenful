#!/bin/sh

STACKBIT_APP_URL="https://${STACKBIT_APP_URL:=app.stackbit.com}"
source .env.local

APP_URL=$STACKBIT_APP_URL SNIPPET_URL=$STACKBIT_APP_URL/snippet.js stackbit dev \
       -c contentful \
       --contentful-management-token $CONTENTFUL_MANAGEMENT_TOKEN \
       --contentful-space-id $CONTENTFUL_SPACE_ID \
       --contentful-preview-token $CONTENTFUL_PREVIEW_TOKEN \
       --open
