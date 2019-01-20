# Database

## 이번 Sprint의 학습 목표

- sqlite3의 가벼운 SQL 을 이용하여 query 의 기본적인 문법들을 손에 익힌다. (sqlite와 MySQL의 문법은 미묘하게 조금씩 다릅니다)
- 자료를 각 테이블에 적절히 나누어 저장하여 서로 필요한 관계를 맺는 것을 이해한다.
- MySQL을 local computer 에 설치하고 접속하는 방법을 익힌다.
- MySQL shell에 접속하여 기본적인 명령문을 이용하여 테이블을 만들고, 데이터를 생성, 업데이트 등을 할 수 있다.
- schema visualizer 를 이용해서 스스로 설계한 Database Schema 를 저장하고 export하여 쓸 줄 안다.
- node MySQL npm clinet 를 이용하여 nodejs server applicatino 환경에서 SQL query 문을 작성하고 동작시킬 줄 안다.
- `server`에서 `app.js`의 express code 각 라인의 역할을 이해하고, `models`, `controller` 폴더안의 코드들의 역할을 보고 어떤 디자인 패턴을 따르고 있는지 찾아보고 이해한다.
- `db/index.js`에서 npm의 `mysql node clinet`를 이용하여 MySQL에 접속할 줄 안다.

## Sprint를 시작하기 전 알고있어야 하는 것들

Sprint를 원활히 진행하기 위해 꼭 알고있어야하는 것들입니다.
아래 항목들 중 모르는 것이 있다면 Sprint를 시작하기 전 꼭 help-desk에 문의부탁드립니다.

- [ ] database 와 node server의 차이점에 대해 그림으로 이해하고 있다.
- [ ] SQL이 local computer혹은 cloud computer등 다양한 곳에 설치되고 사용할 수 있다는 것을 안다.
- [ ] express code와 각 폴더 구조가 나뉘어진 목적을 이해한다.
- [ ] 스프린트 통과를 위해 어느 폴더의 어느 파일에 수정이 필요한지 이해하고 있다.
- [ ] 현재 스프린트 전체 목적을 그림으로 그릴 줄 안다.

## Pair programming을 시작하기 전 혼자서 해볼 것들

본격적으로 Pair programming을 시작하기 전 아래 항목들을 먼저 확인해봅니다.

- [ ] `sqool` mini sprint를 혼자서 해 보며 SQL 기본 명령문들을 익힌다.

## Pair programming에서 같이 해볼 것들

- [ ] 프로젝트 구조를 파악하기
- [ ] 현재 프로젝트의 각각의 요구사항이 무엇인지 그림으로 그려보기
- [ ] MySQL을 local 환경에 잘 설치하고 접속해 보기

## Advanced 한 과제들

- [ ] 런코에서 Advanced Challenges 를 완료하였다.
- [ ] mongoDB로 refactor 하여 스프린트를 완료하였다.
- [ ] Article Collector 를 mongoDB로 refactoring 하여 완료하였다.

## Sprint 진행 방법

1. 현재 repo를 자신의 Github으로 fork 합니다.
2. fork된 repo를 git clone 명령어로 자신의 local 환경으로 다운로드합니다.
3. [student.json](student.json) 파일에 필요한 정보를 입력합니다.
4. 재밌게 coding을 시작합니다.

## 제출 방법

1. [REVIEW.md](REVIEW.md) 파일에 이번 Sprint를 마무리하며 review를 작성합니다.
2. 자신의 remote repo로 push 합니다.
3. Upstream repo에서 pull request를 만듭니다.
