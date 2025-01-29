const container = document.getElementById('table-container');

// 테이블 요소 생성
const table = document.createElement('table');
table.style.width = '100%';
table.setAttribute('border', '1');

// 테이블의 헤더 생성
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['선수', '오버롤', '시즌', '특성'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// 테이블 본문 생성
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// 데이터를 넣을 배열
const data = [
    ['마르코 아센시오', '118', 'PSG24', '얼리 크로스 선호'],
    ['헤수스 나바스', '118', '24TOTY', '얼리 크로스 선호'],
    ['F. 키에사', '118', '24TOTY', '얼리 크로스 선호'],
    ['F. 롱칼리아', '118', 'RV24', '얼리 크로스 선호'],
    ['세르히오 고메스', '118', 'RV24', '얼리 크로스 선호'],
    ['애슐리 영', '118', 'RV24', '얼리 크로스 선호'],
    ['히카르두 오르타', '118', 'UCL24', '얼리 크로스 선호'],
    ['D. 소보슬러이', '119', 'FC24', '얼리 크로스 선호'],
    ['로빈 고젠스', '119', 'FC24', '얼리 크로스 선호'],
    ['헤수스 나바스', '119', 'UCL24', '얼리 크로스 선호'],
    ['R. 로드리게스', '119', 'RK24', '얼리 크로스 선호'],
    ['조나탕 클로스', '119', '24TOTY', '얼리 크로스 선호'],
    ['애슐리 영', '119', 'UH24', '얼리 크로스 선호'],
    ['최철순', '119', 'KL24', '얼리 크로스 선호'],
    ['H. 나카타', '120', '23HERO', '얼리 크로스 선호'],
    ['디르크 카위트', '120', '23HERO', '얼리 크로스 선호'],
    ['A. 캄비아소', '120', 'UH24', '얼리 크로스 선호'],
    ['조던 아이유', '120', 'UH24', '얼리 크로스 선호'],
    ['루이스 리오하', '120', 'CT24', '얼리 크로스 선호'],
    ['히시엘리', '120', 'CT24', '얼리 크로스 선호'],
    ['앤서니 고든', '121', 'UCL24', '얼리 크로스 선호'],
    ['K. 더브라위너', '121', 'RV24', '얼리 크로스 선호'],
    ['마우콩', '121', 'RV24', '얼리 크로스 선호'],
    ['알렉스 텔리스', '121', 'RV24', '얼리 크로스 선호'],
    ['A. 트뤼페르', '121', 'CT24', '얼리 크로스 선호'],
    ['J. 태버니어', '121', 'CT24', '얼리 크로스 선호'],
    ['예트로 빌럼스', '121', 'CT24', '얼리 크로스 선호'],
    ['가야', '122', '24TOTY', '얼리 크로스 선호'],
    ['웬델', '122', 'CT24', '얼리 크로스 선호'],
    ['이태석', '122', 'KL24', '얼리 크로스 선호'],
    ['C. 파블로비치', '122', '24TOTS', '얼리 크로스 선호'],
    ['A. 데이비스', '123', 'RK24', '얼리 크로스 선호'],
    ['제레미 프림퐁', '123', 'RK24', '얼리 크로스 선호'],
    ['솔라 마치', '123', 'CT24', '얼리 크로스 선호'],
    ['마티유 위돌', '123', '24TOTS', '얼리 크로스 선호'],
    ['이강인', '124', 'PSG24', '얼리 크로스 선호'],
    ['크리스천 롤던', '124', 'DY24', '얼리 크로스 선호'],
    ['조엘 워드', '124', 'CT24', '얼리 크로스 선호'],
    ['월프리드 자하', '124', '24TOTS', '얼리 크로스 선호'],
    ['H. 나카타', '125', 'UH24', '얼리 크로스 선호'],
    ['D. 비즐리', '125', 'UH24', '얼리 크로스 선호'],
    ['D.말디니', '125', 'DY24', '얼리 크로스 선호'],
    ['M.솔레', '125', 'FCA24', '얼리 크로스 선호'],
    ['맥매너먼', '126', 'UH24', '얼리 크로스 선호'],
    ['다니호 두키', '126', 'DY24', '얼리 크로스 선호'],
    ['디르크 카위트', '127', 'UH24', '얼리 크로스 선호'],
    ['테전 뷰캐넌', '127', 'COPA24', '얼리 크로스 선호'],
    ['파울로 푸트레', '128', 'UH24', '얼리 크로스 선호'],
    ['J.아람부루', '128', 'COPA24', '얼리 크로스 선호'],
    ['김태영', '129', 'KL24', '얼리 크로스 선호'],
    ['이을용', '129', 'KL24', '얼리 크로스 선호'],
    ['다니엘 무뇨스', '129', 'COPA24', '얼리 크로스 선호'],
    ['테오', '130', '24TOTY', '얼리 크로스 선호'],
    ['데이비드 베컴', '130', 'CT24', '얼리 크로스 선호'],
    ['디르크 카위트', '130', 'IM24', '얼리 크로스 선호'],
    ['D. 칼라브리아', '118', 'UCL24', '중거리 슛 선호'],
    ['L. 토레이라', '118', 'UCL24', '중거리 슛 선호'],
    ['코너 갤러거', '118', 'RK24', '중거리 슛 선호'],
    ['R. 오르솔리니', '118', 'RK24', '중거리 슛 선호'],
    ['콜로 무아니', '118', '24TOTY', '중거리 슛 선호'],
    ['C. 비에리', '118', 'RE2002', '중거리 슛 선호'],
    ['J. 몬레알', '118', 'KL24', '중거리 슛 선호'],
    ['정우영', '119', 'UH24', '중거리 슛 선호'],
    ['A. 가리브', '119', 'RV24', '중거리 슛 선호'],
    ['시드니 고부', '119', 'HOL23', '중거리 슛 선호'],
    ['마테우스 쿠냐', '119', 'HT24', '중거리 슛 선호'],
    ['재러드 보언', '120', '24TOTY', '중거리 슛 선호'],
    ['시드니 고부', '120', '23HERO', '중거리 슛 선호'],
    ['B. 슈바인슈타이거', '120', 'HOL23', '중거리 슛 선호'],
    ['S. 암스트롱', '120', 'CT24', '중거리 슛 선호'],
    ['파비안', '121', 'UH24', '중거리 슛 선호'],
    ['알렉스 텔리스', '121', 'RV24', '중거리 슛 선호'],
    ['갈레누', '121', 'UCL24', '중거리 슛 선호'],
    ['J. 태버니어', '121', 'CT24', '중거리 슛 선호'],
    ['V. 보니페이스', '122', 'RV24', '중거리 슛 선호'],
    ['C. 마르키시오', '122', 'TI24', '중거리 슛 선호'],
    ['수소', '122', 'CT24', '중거리 슛 선호'],
    ['벤 쉬프', '122', '24TOTS', '중거리 슛 선호'],
    ['후이 코스타', '123', 'RV24', '중거리 슛 선호'],
    ['알 오와이란', '123', 'FC24', '중거리 슛 선호'],
    ['C 서머빌', '123', '24TOTS', '중거리 슛 선호'],
    ['커티스 존스', '124', 'CT24', '중거리 슛 선호'],
    ['J. 베스테', '124', '24TOTS', '중거리 슛 선호'],
    ['A. 모스토보이', '125', 'UH24', '중거리 슛 선호'],
    ['케빈 캄플', '125', 'CT24', '중거리 슛 선호'],
    ['존 맥긴', '125', '24TOTS', '중거리 슛 선호'],
    ['M. 아르놀트', '126', 'CT24', '중거리 슛 선호'],
    ['킹슬레 코망', '127', 'CT24', '중거리 슛 선호'],
    ['페렌츠 푸스카스', '128', 'CT24', '중거리 슛 선호'],
    ['파팽', '129', 'UH24', '중거리 슛 선호'],
    ['그리말도', '129', 'EURO24', '중거리 슛 선호'],
    ['토니 크로스', '130', '24TOTY', '중거리 슛 선호'],
    ['데이비드 베컴', '130', 'CT24', '중거리 슛 선호'],
    ['시드니 고부', '120', '23HERO', '아웃사이드 슈팅'],
    ['A. 디나탈레', '120', 'HOL23', '아웃사이드 슈팅'],
    ['우나이 로페스', '120', 'CT24', '아웃사이드 슈팅'],
    ['G. 라보르드', '121', 'CT24', '아웃사이드 슈팅'],
    ['E. 파블리디스', '121', 'CT24', '아웃사이드 슈팅'],
    ['피지', '122', 'CT24', '아웃사이드 슈팅'],
    ['L. 아코스타', '122', '24TOTS', '아웃사이드 슈팅'],
    ['H.엘리엇', '123', 'CT24', '아웃사이드 슈팅'],
    ['R. 셰르키', '123', 'CT24', '아웃사이드 슈팅'],
    ['R. 안드리히', '124', 'CT24', '아웃사이드 슈팅'],
    ['케빈 플란트', '124', 'CT24', '아웃사이드 슈팅'],
    ['랜던 도노번', '125', 'UH24', '아웃사이드 슈팅'],
    ['아론 램지', '126', 'CT24', '아웃사이드 슈팅'],
    ['프레디 융베리', '127', 'UH24', '아웃사이드 슈팅'],
    ['리켈메', '128', 'CT24', '아웃사이드 슈팅'],
    ['케니 달글리시', '129', 'CT24', '아웃사이드 슈팅'],
    ['데이비드 베컴', '130', 'CT24', '아웃사이드 슈팅'],
    ['디르크 카위트', '120', '23HERO', '강력한 헤더'],
    ['마르코스 로호', '120', 'CT24', '강력한 헤더'],
    ['아이사 만디', '121', 'CT24', '강력한 헤더'],
    ['B. 브로비', '121', 'CT24', '강력한 헤더'],
    ['리엄 스케일스', '122', '24TOTS', '강력한 헤더'],
    ['M. 발로텔리', '122', '24TOTY', '강력한 헤더'],
    ['올레 군나르 솔샤르', '123', 'FC24', '강력한 헤더'],
    ['팀 케이힐', '123', 'FC24', '강력한 헤더'],
    ['파팽', '124', 'FC24', '강력한 헤더'],
    ['우고 산체스', '124', 'FC24', '강력한 헤더'],
    ['클레망 랑글레', '125', 'CT24', '강력한 헤더'],
    ['J. 지르크제', '125', '24TOTS', '강력한 헤더'],
    ['칸나바로', '126', 'RV24', '강력한 헤더'],
    ['에릭 칸토나', '126', 'RV24', '강력한 헤더'],
    ['앨런 시어러', '127', 'HT24', '강력한 헤더'],
    ['디르크 카위트', '127', 'UH24', '강력한 헤더'],
    ['이민성', '128', 'KL24', '강력한 헤더'],
    ['솔 캠벨', '128', 'CT24', '강력한 헤더'],
    ['김태영', '129', 'KL24', '강력한 헤더'],
    ['최진철', '129', 'KL24', '강력한 헤더'],
    ['E. 홀란', '130', '24TOTY', '강력한 헤더'],
    ['A. 네스타', '130', 'CT24', '강력한 헤더'],
    ['잔루카 비알리', '130', 'ENI24', '강력한 헤더'],
    ['M.클로제', '118', 'RE2002', '라인 브레이커'],
    ['부트라게뇨', '121', 'HOL23', '라인 브레이커'],
    ['티에리 앙리', '122', 'ISS23', '라인 브레이커'],
    ['차범근', '128', 'NYI24', '라인 브레이커'],
    ['수벨디아', '120', 'UH24', '패스 마스터'],
    ['F. 가티', '120', 'UH24', '패스 마스터'],
    ['롸세 쇠네', '121', 'CT24', '패스 마스터'],
    ['유리 조나단', '121', 'KL24', '패스 마스터'],
    ['이건희', '122', 'KL24', '패스 마스터'],
    ['B. 브로비', '122', '24TOTS', '패스 마스터'],
    ['카림 오니지보', '123', 'CT24', '패스 마스터'],
    ['시몽 반자', '123', '24TOTS', '패스 마스터'],
    ['이강인', '124', 'PSG24', '패스 마스터'],
    ['W. 자이르 에머리', '124', '24TOTS', '패스 마스터'],
    ['L. 릭켄', '125', 'UH24', '패스 마스터'],
    ['이탈로', '125', 'KL24', '패스 마스터'],
    ['C. 풀리식', '125', '24TOTS', '패스 마스터'],
    ['알레시 가르시아', '126', '24TOTS', '패스 마스터'],
    ['A.라포르테', '126', 'EURO24', '패스 마스터'],
    ['T. 로시츠키', '127', 'UH24', '패스 마스터'],
    ['에마뉘엘 프티', '128', 'CT24', '패스 마스터'],
    ['차비', '129', 'CT24', '패스 마스터'],
    ['P. 비에이라', '130', 'CT24', '패스 마스터'],
    ['M.라우드루프', '130', 'ENI24', '패스 마스터'],
    ['맥 그라임스', '120', 'CT24', '슬라이딩 태클 선호'],
    ['L. 마르티네스 콰레타', '121', '24TOTY', '슬라이딩 태클 선호'],
    ['엠레 잔', '121', 'UH24', '슬라이딩 태클 선호'],
    ['B. 마르팅스 인디', '122', 'CT24', '슬라이딩 태클 선호'],
    ['리프 데이비스', '122', '24TOTS', '슬라이딩 태클 선호'],
    ['하비에로 마스체라노', '123', 'RV24', '슬라이딩 태클 선호'],
    ['N. 회플러', '123', 'CT24', '슬라이딩 태클 선호'],
    ['S. 로데', '124', 'CT24', '슬라이딩 태클 선호'],
    ['케냐 랄라', '124', '24TOTS', '슬라이딩 태클 선호'],
    ['I. 코르도바', '125', 'UH24', '슬라이딩 태클 선호'],
    ['티아구 산투스', '125', '24TOTS', '슬라이딩 태클 선호'],
    ['페페', '126', 'CT24', '슬라이딩 태클 선호'],
    ['R.르 노르망', '126', 'EURO24', '슬라이딩 태클 선호'],
    ['히카르두 카르발류', '127', 'UH24', '슬라이딩 태클 선호'],
    ['이민성', '128', 'KL24', '슬라이딩 태클 선호'],
    ['C. 푸욜', '129', 'CT24', '슬라이딩 태클 선호'],
    ['제레미 프림퐁', '130', '24TOTY', '슬라이딩 태클 선호'],
    ['보비 무어', '130', 'ENI24', '슬라이딩 태클 선호'],
    ['D. 프로퍼', '120', 'CT24', '화려한 걷어내기'],
    ['K. 마칼리스테르', '120', 'CT24', '화려한 걷어내기'],
    ['G. 디로렌초', '121', '24TOTY', '화려한 걷어내기'],
    ['M. 데실리오', '121', 'JUV24', '화려한 걷어내기'],
    ['K. 워커 피터스', '122', '24TOTS', '화려한 걷어내기'],
    ['리프 데이비스', '122', '24TOTS', '화려한 걷어내기'],
    ['마이클 킨', '123', 'CT24', '화려한 걷어내기'],
    ['코스티냐', '123', '24TOTS', '화려한 걷어내기'],
    ['이강인 (CM)', '124', 'PSG24', '화려한 걷어내기'],
    ['S. 로데', '124', 'CT24', '화려한 걷어내기'],
    ['M. 시마칸', '125', '24TOTS', '화려한 걷어내기'],
    ['안토니 로빈슨', '125', '24TOTS', '화려한 걷어내기'],
    ['마누엘 아칸지', '126', 'CT24', '화려한 걷어내기'],
    ['F. 칸나바로', '126', 'RV24', '화려한 걷어내기'],
    ['히카르두 카르발류', '127', 'UH24', '화려한 걷어내기'],
    ['티아구 실바 (치아고 시우바)', '127', 'CT24', '화려한 걷어내기'],
    ['김남일', '128', 'KL24', '화려한 걷어내기'],
    ['로랑 블랑', '128', 'CT24', '화려한 걷어내기'],
    ['최진철', '129', 'KL24', '화려한 걷어내기'],
    ['C. 푸욜', '129', 'CT24', '화려한 걷어내기'],
    ['테오', '130', '24TOTY', '화려한 걷어내기'],
    ['제레미 프림퐁', '130', '24TOTY', '화려한 걷어내기'],
    ['J.사네티', '130', 'SO24', '화려한 걷어내기'],
    ['몰레이로', '120', 'CT24', '예리한 감아차기'],
    ['파트리크 시크', '120', 'HT24', '예리한 감아차기'],
    ['R. 반볼프스빙컬', '121', 'CT24', '예리한 감아차기'],
    ['E. 파블리디스', '121', 'CT24', '예리한 감아차기'],
    ['호사', '122', 'KL24', '예리한 감아차기'],
    ['라파 무히카', '122', '24TOTS', '예리한 감아차기'],
    ['로비 킨', '123', 'FC24', '예리한 감아차기'],
    ['야리 리트마넨', '123', 'FC24', '예리한 감아차기'],
    ['보르하 이글레시아스', '124', 'CT24', '예리한 감아차기'],
    ['라울', '124', 'RV24', '예리한 감아차기'],
    ['J. 데이비드', '125', '24TOTS', '예리한 감아차기'],
    ['M. 반바스텐', '125', 'FC24', '예리한 감아차기'],
    ['가브리엘 마르치넬리', '126', 'CT24', '예리한 감아차기'],
    ['라힘 스털링', '126', 'CT24', '예리한 감아차기'],
    ['디에고 밀리토', '127', 'UH24', '예리한 감아차기'],
    ['헨릭 라르손', '127', 'HT24', '예리한 감아차기'],
    ['페렌츠 푸스카스', '128', 'CT24', '예리한 감아차기'],
    ['게리 리네커', '128', 'CT24', '예리한 감아차기'],
    ['루디 펠러', '129', 'UH24', '예리한 감아차기'],
    ['프란체스콜리', '129', 'UH24', '예리한 감아차기'],
    ['리오넬 메시', '130', '24TOTY', '예리한 감아차기'],
    ['E. 홀란', '130', '24TOTY', '예리한 감아차기'],
    ['데이비드 베컴', '130', 'CT24', '예리한 감아차기'],
    ['S. 암스트롱', '120', 'CT24', '두번째 활력'],
    ['브렌던 에런슨', '120', 'UH24', '두번째 활력'],
    ['B. 브로비', '121', 'CT24', '두번째 활력'],
    ['유리 조나단', '121', 'KL24', '두번째 활력'],
    ['레나토 슈테펜', '122', '24TOTS', '두번째 활력'],
    ['엑토르 에레라', '122', '24TOTS', '두번째 활력'],
    ['L. 보누치', '123', '24TOTS', '두번째 활력'],
    ['D. 베르바토프', '123', 'RV24', '두번째 활력'],
    ['이강인 (CM)', '124', 'PSG24', '두번째 활력'],
    ['테베즈', '124', 'RV24', '두번째 활력'],
    ['J. 지르크제', '125', '24TOTS', '두번째 활력'],
    ['N. 오타멘디', '125', '24TOTS', '두번째 활력'],
    ['I. 코나테', '126', '24TOTS', '두번째 활력'],
    ['F. 디마르코', '126', '24TOTS', '두번째 활력'],
    ['프레디 융베리', '127', 'UH24', '두번째 활력'],
    ['T. 로시츠키', '127', 'UH24', '두번째 활력'],
    ['송종국', '128', 'KL24', '두번째 활력'],
    ['루드 굴리트', '128', '삼국24', '두번째 활력'],
    ['신태용', '129', 'KL24', '두번째 활력'],
    ['M. 반바스텐', '129', 'CT24', '두번째 활력'],
    ['파울로 말디니', '130', 'CT24', '두번째 활력'],
    ['J. 벨링엄', '130', '24TOTY', '두번째 활력'],
    ['A. 도브비크', '130', '24TOTS', '두번째 활력'],
    ['페르난도 이에로','120','IF23','주발 선호'],
    ['F. 아르마니','120','CT24','주발 선호'],
    ['마르코 반힝켈','121','CT24','주발 선호'],
    ['니쿠쇼르 반쿠','121','EURO24','주발 선호'],
    ['아단','122','CT24','주발 선호'],
    ['H. 몰도반','122','EURO24','주발 선호'],
    ['니코 엘베디','123','CT24','주발 선호'],
    ['페르민 로페즈','123','EURO24','주발 선호'],
    ['페란 토레스','124','CT24','주발 선호'],
    ['K. 요시노','124','KL24','주발 선호'],
    ['알 오와이란','125','UH24','주발 선호'],
    ['사비우','125','24TOTS','주발 선호'],
    ['마누엘 아칸지','126','CT24','주발 선호'],
    ['페르난도 이에로','126','HT24','주발 선호'],
    ['헨릭 라르손','127','HT24','주발 선호'],
    ['프랑코 바레시','128','CT24','주발 선호'],
    ['이을용','129','KL24','주발 선호'],
    ['페터 슈마이켈','130','ENI24','주발 선호'],
    ['다비드 소리아', '120', 'CT24', 'GK 멀리 던지기'],
    ['니크 올리이', '120', 'CT24', 'GK 멀리 던지기'],
    ['마테우스', '121', 'CT24', 'GK 멀리 던지기'],
    ['이창근', '121', 'KL24', 'GK 멀리 던지기'],
    ['F. 무슬레라', '122', '24TOTS', 'GK 멀리 던지기'],
    ['아단', '122', 'CT24', 'GK 멀리 던지기'],
    ['M. 테어슈테겐', '123', '24TOTY', 'GK 멀리 던지기'],
    ['페테르 굴라치', '123', 'CT24', 'GK 멀리 던지기'],
    ['우나이 시몬', '124', '24TOTS', 'GK 멀리 던지기'],
    ['호르헤 캄포스', '125', 'UH24', 'GK 멀리 던지기'],
    ['조 하트', '125', 'CT24', 'GK 멀리 던지기'],
    ['닉 포프', '126', 'CT24', 'GK 멀리 던지기'],
    ['알리송', '126', '24TOTS', 'GK 멀리 던지기'],
    ['F.이스라엘', '126', 'COPA24', 'GK 멀리 던지기'],
    ['페트르 체흐', '127', 'NYI', 'GK 멀리 던지기'],
    ['마누엘 노이어', '127', 'CT24', 'GK 멀리 던지기'],
    ['E. 반데르사르', '128', 'NYI', 'GK 멀리 던지기'],
    ['E. 마르티네스', '129', 'COPA24', 'GK 멀리 던지기'],
    ['알리송', '130', '24TOTY', 'GK 멀리 던지기'],
    ['마이크 메냥', '131', 'EURO24', 'GK 멀리 던지기'],
    // 더 많은 데이터를 추가하세요
];

let filteredData = [...data]; // 필터링된 데이터를 저장할 배열

const rowsPerPage = 30; // 한 페이지에 표시할 데이터 수
let currentPage = 1; // 현재 페이지

function filterTable() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    // 검색어로 데이터 필터링
    filteredData = data.filter(row => {
        return row.some(cell => cell.toLowerCase().includes(searchTerm));
    });

    // 필터링된 데이터를 기준으로 첫 페이지 표시
    displayPage(1);
}

function displayPage(page) {
    currentPage = page; // 현재 페이지 업데이트

    // 시작 인덱스
    const start = (page - 1) * rowsPerPage;
    // 종료 인덱스
    const end = page * rowsPerPage;

    // 현재 페이지의 데이터 추출
    const paginatedItems = filteredData.slice(start, end);

    // 테이블 본문 클리어
    tbody.innerHTML = '';

    // 현재 페이지 데이터로 테이블 본문 채우기
    paginatedItems.forEach(item => {
        const row = tbody.insertRow();
        item.forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });

    // 페이지네이션 버튼 업데이트
    setupPagination(filteredData.length, page);
}

function setupPagination(totalItems, currentPage) {
    const pageCount = Math.ceil(totalItems / rowsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // 기존 페이지네이션 버튼 제거

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => displayPage(i));
        paginationContainer.appendChild(btn);
    }
}

// 검색 이벤트 리스너 추가
document.getElementById('search-input').addEventListener('input', filterTable);

// 초기 페이지 로딩
displayPage(currentPage);

// 테이블을 컨테이너에 추가
container.appendChild(table);

document.getElementById('copy-button').addEventListener('click', function() {
    // 이메일 텍스트 가져오기
    const emailText = document.getElementById('email').textContent;

    // 임시 텍스트 입력 요소 생성
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // 텍스트 선택 및 복사
    tempInput.select();
    document.execCommand('copy');

    // 임시 입력 요소 삭제
    document.body.removeChild(tempInput);

    // 알림 메시지 출력
    alert('이메일이 복사되었습니다: ' + emailText);
  });
 
  async function getIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('IP 주소를 가져오는 중 오류 발생:', error);
      return null;
    }
  }

  // 첫 방문 여부 확인 (기존 기능)
  async function checkFirstVisit() {
    const ipAddress = await getIPAddress();

    if (!ipAddress) {
      console.error('IP 주소를 확인할 수 없습니다.');
      return;
    }

    const today = new Date().toDateString(); // 오늘 날짜 문자열 (yyyy-mm-dd 형식)
  const lastVisitData = JSON.parse(localStorage.getItem('lastVisit')) || { date: null, ips: [] };

   if (lastVisitData.date !== today) {
    // 날짜가 다르면 초기화
    lastVisitData.date = today;
    lastVisitData.ips = [];
  }

  if (!lastVisitData.ips.includes(ipAddress)) {
    showModal();
    lastVisitData.ips.push(ipAddress);
  }

  localStorage.setItem('lastVisit', JSON.stringify(lastVisitData));
}

  // 모달 표시 함수
  function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // 모달 표시

    // 닫기 버튼 이벤트
    document.getElementById('confirm').addEventListener('click', () => {
      modal.style.display = 'none';
    });
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  

  // 페이지 로드 시 실행
  checkFirstVisit();

  
  
  
  let deferredPrompt; // 이벤트 객체 저장

  // beforeinstallprompt 이벤트 캐치
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // 기본 동작 방지
    deferredPrompt = event; // 이벤트 객체 저장
  
    // 팝업 표시
    const installPrompt = document.getElementById("installPrompt");
    installPrompt.style.display = "block";
  });
  
  // "추가하기" 버튼 클릭 시
  document.getElementById("installConfirm").addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // 설치 UI 표시
      const choiceResult = await deferredPrompt.userChoice;
  
      if (choiceResult.outcome === "accepted") {
        console.log("사용자가 설치를 수락했습니다.");
      } else {
        console.log("사용자가 설치를 거부했습니다.");
      }
      deferredPrompt = null; // 초기화
    }
  
    // 팝업 숨기기
    document.getElementById("installPrompt").style.display = "none";
  });
  
  // "취소" 버튼 클릭 시
  document.getElementById("installCancel").addEventListener("click", () => {
    // 팝업 숨기기
    document.getElementById("installPrompt").style.display = "none";
  });


//othernames
let otherNamesData = {}; // otherNames 데이터를 저장할 변수

// JSON 파일에서 특성의 otherNames 불러오기
async function loadOtherNames() {
    try {
        const response = await fetch('otherNames.json');
        otherNamesData = await response.json();
        console.log("📄 otherNames.json 데이터 불러옴:", otherNamesData);
        displayTable(data); // 테이블 다시 로드
    } catch (error) {
        console.error("❌ otherNames.json 로드 실패:", error);
    }
}

// 테이블 본문 생성
const t_body = document.createElement('tbody');
table.appendChild(tbody);

function displayTable(dataArray) {
    tbody.innerHTML = ''; // 기존 데이터 초기화

    dataArray.forEach(rowData => {
        const row = tbody.insertRow();

        rowData.forEach((cellData, index) => {
            const cell = row.insertCell();

            if (index === 3) { // 특성 컬럼이면 otherNames 사용 X (표시 X)
                cell.textContent = cellData;
            } else {
                cell.textContent = cellData;
            }
        });
    });
}

// 검색 기능도 `otherNames`에서 검색되도록 변경
function filterTable() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    filteredData = data.filter(row => {
        return row.some((cell, index) => {
            if (index === 3) { // 특성 컬럼이면 otherNames까지 검색
                const otherNames = otherNamesData[cell] || [];
                return cell.toLowerCase().includes(searchTerm) ||
                       otherNames.some(other => other.toLowerCase().includes(searchTerm));
            }
            return String(cell).toLowerCase().includes(searchTerm);
        });
    });

    displayPage(1);
}

// JSON 파일 불러온 후 테이블 표시
loadOtherNames();

