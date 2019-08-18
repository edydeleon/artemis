---
title: "{{ replace .Name "-" " " | title }}"
layout: {{ .Name }}
description: "This is the meta description"
menu:
  main:
    weight: 10
url: "/{{ .Name }}"
draft: true
---
