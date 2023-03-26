#!/bin/bash

dhclient &
sleep 1
clear
GET_PORT_CONFIG=$(cat /usr/local/etc/iguana-hpc-usp/config.yaml | grep '"PublicInterface":' | awk '{print $2}' | sed 's/"//g' | sed 's/,//g' | tr -d '[:space:]')
GET_USER=$(cat /usr/local/etc/iguana-hpc-usp/config.yaml | grep '"HostUser":' | awk '{print $2}' | sed 's/"//g' | sed 's/,//g' | tr -d '[:space:]')
GET_PASSWORD=$(cat /usr/local/etc/iguana-hpc-usp/config.yaml | grep '"HostPassword":' | awk '{print $2}' | sed 's/"//g' | sed 's/,//g' | tr -d '[:space:]')
PORT=8000
{
  for ((i = 0; i <= 200; i += 5)); do
    sleep 0.1
    echo $i
  done
} | whiptail --gauge "Please wait! Loading configurations..." 6 50 0

set -e

if [[ ! -z $GET_PORT_CONFIG ]]; then
  PORT=$GET_PORT_CONFIG
fi

if [[ ! -z GET_USER ]]; then
  GET_USER="user@user"
fi

if [[ ! -z GET_PASSWORD ]]; then
  GET_PASSWORD="user"
fi

INTERFACES=$(ip l | grep -E '[a-z].*: ' | egrep -v lo | egrep -v docker | cut -d ':' -f2 | cut -d ' ' -f2)
set $INTERFACES

IP_PRINT="\n"

for i in $@; do
  IP=$(ip a | grep -E "$i$" | cut -d ' ' -f6 | sed 's/\/24//g' | tr -d '[:space:]')
  IP_PRINT="$IP_PRINT http://$IP:$PORT\n"
done

whiptail --title "Welcome Iguana Cluster System" --msgbox \
  "\n#############################################################
                   AUTOMATIC SYSTEM DETECTION
  #############################################################
  \nWe show below a list of detected IPs.
  Use the IP and port to access Iguana's web interface:
  $IP_PRINT
  \nUser: $GET_USER
  \nPassword: $GET_PASSWORD
  \n\nPut the IP for the bridge network in your browser." 25 65 4

/bin/login
