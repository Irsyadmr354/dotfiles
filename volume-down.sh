#!/bin/bash
pamixer -d 5
perc=$(pamixer --get-volume)

notify-send -t 1500 \
    -h "int:value:$perc" \
    -h "string:x-dunst-stack-tag:volume" \
    "Volume: $perc%"
