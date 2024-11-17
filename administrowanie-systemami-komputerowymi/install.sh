#!/bin/bash

## Przypomnienie
NAME=${NAME:-"World"}
echo "Hello ${NAME}"

# REPOSITORY=https://github.com/Alina-Kumorek/pp4
REPOSITORY=https://github.com/jkanclerz/computer-programming-4-2024
VERSION=main
TMP_DEST_DIR=/tmp/ecommerce
DEST_DIR=/opt/ecommerce
USERNAME=ecommerce

## Install os packages
dnf install -y -q cowsay tree mc

## install java & maven
dnf -y -q install java-17-amazon-corretto \
    install maven-local-amazon-corretto17

## git clone repo
dnf -y -q install git
rm -rf ${TMP_DEST_DIR}
git clone ${REPOSITORY} -b ${VERSION} ${TMP_DEST_DIR}

## compile & package
cd ${TMP_DEST_DIR} && mvn -DskipTests package

## user & dir
adduser ${USERNAME}
mkdir -p ${DEST_DIR}

################################
### wget gotowaPaczka
mv ${TMP_DEST_DIR}/target/*.jar ${DEST_DIR}/app.jar

## start || configure as system service

echo "java -Dserver.port=80 -jar ${DEST_DIR}/app.jar"

cowsay "it works"