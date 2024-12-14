#!/bin/bash

## Fast track to bash 
NAME=${NAME:-"World"}
NAME=$(whoami)

VERSION=${VERSION:-"2.1.2-rc"}
APP_URL="https://github.com/jkanclerz/computer-programming-4-2024/releases/download/${VERSION}/ecommerce.jar"

DEST_DIR=/opt/ecommerce
USERNAME=ecommerce

## install java & maven
dnf install -y -q java-17-amazon-corretto

## user & dir
adduser ${USERNAME}
mkdir -p ${DEST_DIR}
curl -L -o ${DEST_DIR}/ecommerce.jar ${APP_URL}
chown ${USERNAME}:${USERNAME} -R ${DEST_DIR}

## Templating systemd service
systemd_service_template="""
[Unit]
Description=Ecommerce Service
After=network-online.target

[Service]
Type=simple
User=${USERNAME}
ExecStart=/usr/bin/java -jar -Dserver.port=8080 ${DEST_DIR}/ecommerce.jar
Restart=always

[Install]
WantedBy=multi-user.target
"""

echo "$systemd_service_template" > /etc/systemd/system/ecommerce.service
systemctl daemon-reload
## Add to autostart
systemctl enable ecommerce
systemctl start ecommerce