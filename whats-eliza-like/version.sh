#!/bin/bash
git describe --match='V*' HEAD 2>/dev/null | sed s/V//
