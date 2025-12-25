#!/bin/bash

# GitHub Pages 배포 스크립트

# 빌드
npm run build

# out 폴더로 이동
cd out

# Git 초기화
git init
git add -A
git commit -m "Deploy portfolio to GitHub Pages"

# GitHub Pages에 푸시 (아래에 자신의 저장소 URL을 입력하세요)
# git push -f https://github.com/USERNAME/USERNAME.github.io.git main

echo "Build complete! Deploy the 'out' folder to GitHub Pages."
echo "Run: git push -f https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git main"
