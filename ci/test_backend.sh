#!/bin/bash
export COMPOSE_PROJECT_NAME=djavue-python-brasil_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run djavue-python-brasil unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
