#!/bin/bash
brightnessctl set +10%
perc=$(brightnessctl get)
max=$(brightnessctl max)
percent=$((perc * 100 / max))

notify-send -t 1500 \
    -h "int:value:$percent" \
    -h "string:x-dunst-stack-tag:brightness" \
    "Brightness: $percent%"
