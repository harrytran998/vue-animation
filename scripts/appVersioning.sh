GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
GIT_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# if in Gitlab CI environment --> Use CI_COMMIT_REF_NAME instead
if [ -n "$CI_COMMIT_REF_NAME" ]
then
    GIT_BRANCH_NAME=$CI_COMMIT_REF_NAME
fi

# Write in the last line of .env.uat
echo -e >> assets/.env.uat '\n'GIT_COMMIT_HASH=$GIT_COMMIT_HASH
echo >> assets/.env.uat ''GIT_BRANCH_NAME=$GIT_BRANCH_NAME
