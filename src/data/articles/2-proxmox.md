---
title: "Setting up a Secure DMZ using Proxmox"
date: "Sep 15, 2026"
excerpt: "Step-by-step guide on creating a demilitarized zone in a virtualized environment to keep your internal network safe."
readTime: "8 min read"
---
## What is a DMZ?

A Demilitarized Zone (DMZ) is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted, usually larger, network such as the Internet. The purpose of a DMZ is to add an additional layer of security to an organization's local area network (LAN).

## Virtualizing the DMZ with Proxmox

Using a Type-1 Hypervisor like Proxmox VE makes setting up a DMZ incredibly flexible. Instead of needing physical switches and routers, we can use virtual bridges (vmbr) to isolate network traffic.

![Proxmox Network Architecture](./assets/diagram.png "Logical DMZ Architecture in Proxmox")

### The Setup

My typical setup involves a pfSense virtual machine acting as the primary firewall and router. I configure three main network bridges in Proxmox:

1. **vmbr0 (WAN):** Connected directly to the internet modem.
2. **vmbr1 (LAN):** The secure internal network where databases and private services live.
3. **vmbr2 (DMZ):** The isolated network for public-facing web servers.

## Firewall Rules

The golden rule for the DMZ is: **Traffic from the Internet can enter the DMZ, but traffic from the DMZ cannot enter the LAN.** Only the LAN can initiate connections into the DMZ (e.g., for administrative SSH access).

By implementing this in Proxmox, if a public web server is compromised, the attacker is trapped inside the DMZ and cannot pivot into the sensitive internal network.

### Automation Script Snippet

To speed up the network configuration on new Proxmox nodes, here is a handy bash script snippet you can use to automatically define your bridges in the \`/etc/network/interfaces\` file:

```bash
#!/bin/bash
# Automatically configure basic Proxmox bridges

cat <<EOF >> /etc/network/interfaces

auto vmbr1
iface vmbr1 inet static
        address 10.0.1.1/24
        bridge-ports none
        bridge-stp off
        bridge-fd 0
        # Internal LAN

auto vmbr2
iface vmbr2 inet static
        address 10.0.2.1/24
        bridge-ports none
        bridge-stp off
        bridge-fd 0
        # DMZ Network
EOF

systemctl restart networking
echo "Bridges configured successfully."
```
