#!/bin/bash
pamixer -t
muted=$(pamixer --get-mute)

if [ "$muted" = "true" ]; then
    notify-send -t 1500 \
        -h string:x-dunst-stack-tag:volume \
        "Volume: Muted"
else
    vol=$(pamixer --get-volume)
    notify-send -t 1500 \
        -h int:value:$vol \
        -h string:x-dunst-stack-tag:volume \
        "Volume: $vol%"
fi
