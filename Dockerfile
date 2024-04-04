FROM node:16
LABEL authors="kwangsinlee"

# /app 디렉토리 생성
RUN mkdir -p /app
# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /app
# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /app
# npm install 을 실행
RUN npm install
RUN npm run build


#가상 머신에 오픈할 포트
EXPOSE 8080

#컨테이너에서 실행될 명령을 지정
CMD ["npm", "start"]