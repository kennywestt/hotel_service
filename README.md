# Hotel Service Renewal

기존 신라호텔 예약 사이트는 예약 단계가 길고 안내가 부족해 이탈이 있을 수 있다고 생각하였습니다.
이런 아쉬움을 개선하기 위해 예약, 결제, 승인까지 흐름을 단순화하고, 반응형 UI로 리뉴얼 하였습니다.
총 5명이 프론트엔드로 참여했고 필요한 서버와 데이터 작업은 역할에 맞춰 함께 수행하였습니다.

- 프로젝트 기간: **2024-11-26 ~ 2024-01-14**
- 참여 인원: **5명** (프론트엔드 중심, 일부 API·DB 구현 포함)

## 리포지토리 & 호스팅

- Frontend(React): <https://github.com/kennywestt/react_hotel>  
- Backend(Node.js): <https://github.com/kennywestt/nodejs_hotel>  
- 호스팅: **Cloudtype**  
- 호스팅 사이트: <https://web-react-hotel-m84jldlx56e236e1.sel4.cloudtype.app/>

> 참고: 현재 저장소(hotel_service)는 팀 프로젝트 산출물 정리용이며, 실제 배포는 위 분리 저장소를 사용했습니다.

---
## 팀 구성 & 역할

**손주혜**
- 공통: 헤더/푸터, 메인 페이지 , 회원/인증: 로그인, 회원가입, 마이페이지, 고객센터: 연락처, 문의게시판, 오시는 길
- 관리자페이지: 기본 화면, 미답변 문의 관리

**이경근**
- 예약: 예약 검색 필터링, 예약 확인 정보, 결제: 결제하기, 마이페이지: 결제 취소·환불, 예약내역 확인
- 관리자페이지: 당일 예약 현황, 당일 취소 현황

**김소희**
- 스페셜오퍼/이벤트: 목록/상세(A~E), 공지사항(리스트/상세)
- 관리자페이지: 공지 관리(리스트/추가/수정/삭제)

**손재훈**
- 라이프스타일, 피트니스, 다이닝, 어번 아일랜드, 사우나, 산책로, 레스토랑
- 관리자페이지 : 객실관리,매출현황

**이규만**
- 객실: 객실 전체/타입별 상
- 관리자페이지: 방문자/매출/객실별 판매/취소 현황, 회원관리 게시판

## 이경근의 버전별 역할
### Shilla_v2
- **예약 기능** 1차 구현
  - 객실/날짜/인원 등 조건 기반 예약 흐름
  - 예약 생성/확인 기본 플로우 정리

### Shilla_v3
- **결제 기능**
  - Toss Payments SDK 연동
  - 결제 승인/취소 로직 서버 중심 재설계
- **관리자(예약관리)**
  - **오늘 예약 현황** 조회
  - **당일 취소 현황** 조회
- **마이페이지 확장**
  - **예약 내역 조회**
  - **결제 취소·환불** 처리 화면

---

## 기술 스택
| 영역 | 사용 기술 |
|---|---|
| Frontend | **React 18.3.1**, SCSS, `react-router-dom`, `react-date-range`, `date-fns`, `Axios` |
| Backend | **Node.js 20**, Express |
| Database | **MariaDB 11.2** |
| Payment | `@tosspayments/tosspayments-sdk` |
| 상태관리 | zustand |

---

**WBS(작업 분장표)** : <https://docs.google.com/spreadsheets/d/1oPSj2ZW7eJnzm3DVjmy8NDUJRv5GWYZKAheRds31aBs/edit?gid=0#gid=0>
**PPT(요구사항 정의서, ERD 등)** : <https://docs.google.com/presentation/d/17XPA9UH_m_6vYxjWLgTS40vYDhsSSqg5kyBfMppuy9k/edit?slide=id.g328849d1328_0_0#slide=id.g328849d1328_0_0>
