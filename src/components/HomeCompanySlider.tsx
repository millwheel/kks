'use client';

import { useEffect, useState, useRef } from 'react';

const companies = [
    "마이크론(Micron)", "ASML", "써모피셔사이언티픽", "S&P글로벌", "온세미컨덕터",
    "어플라이드 머티리얼즈", "램리서치", "KLA", "ASM", "TEL", "삼성전자", "기아자동차",
    "SK하이닉스", "삼성디스플레이", "에스오일", "S-OIL", "SK실트론", "현대자동차",
    "포스코", "POSCO", "현대모비스", "현대로템", "유니투스 김천공장", "모트라스",
    "LG이노텍", "LG전자", "한화시스템", "카카오뱅크", "현대엘리베이터", "현대오일뱅크",
    "삼성SDI", "삼성SDS", "삼성바이오에피스", "삼성생명", "삼성화재", "삼성증권",
    "제일기획", "에스원", "삼성웰스토리", "셀트리온", "SK이노베이션", "SK에너지",
    "SK트리켐", "엠코코리아(Amkor)", "한국항공우주산업(KAI)", "삼성중공업", "아세아시멘트",
    "여천NCC", "대원제약", "PTKOREA", "동아제약", "코오롱스페이스웍스", "SFA반도체",
    "SL", "SK플라즈마", "포스코DX", "현대제철", "Secta9ine", "엔테크서비스", "스템코",
    "한국농업기술진흥원", "한국소비자원", "한국건강가정진흥원", "독립기념관", "포천도시공사",
    "태백시설관리공단", "한국환경공단", "삼성물산", "한국전기연구원", "삼성바이오로직스",
    "싸토리우스", "SK피아이씨글로벌", "HD현대", "HD현대미포조선", "대한항공", "아시아나항공",
    "다스(아산공장)", "동일바이오테크", "한국수자원공사", "한수원", "대한통운", "CJ제일제당",
    "한화에어로스페이스", "한국음악저작권협회", "포스코스틸리온", "두산", "한화토탈에너지스",
    "현대해상", "현대오토에버", "매그나칩", "매그나칩반도체", "LT소재", "한독", "유안타증권",
    "농협네트웍스", "티웨이항공", "코오롱생명과학", "코오롱제약", "엠로", "쿠팡",
    "쿠팡풀필먼트서비스", "비즈테크아이", "한미약품", "한국철도공사", "코레일", "CJ씨푸드",
    "한미그룹", "삼양그룹", "미래에셋증권", "국순당", "폴리미래", "진흥원", "코스맥스네오",
    "한국야금", "스마일게이트", "제주항공", "반도건설", "동서석유화학", "강림중공업", "우양",
    "텍슨", "네이처이앤티", "동방", "유도", "한국공항", "지상조업", "시스템알앤디",
    "오성씨앤애스", "애경산업", "한국해양과학기술원", "주택도시보증공사", "한국국제협력단",
    "남양유업", "한국알프스", "햔대피엔에스", "국립수산물품질관리원", "서교공",
    "한국기계전기전자시험연구원", "한양이엔지", "에어코리아", "커피빈코리아", "KCC실리콘",
    "LT메탈", "신한신용정보", "아이디스", "AXA손해보험", "OTIS", "오티스", "한세실업",
    "지역농협", "삼성그룹", "한국중소벤처기업유통원", "대한펜싱협회", "대한체육협회",
    "영등포문화재단", "한국구화학교", "지미션", "한국장기조직기증원", "한국문화정보원",
    "포항시시설관리공단", "경기도평생교육진흥원", "세종시문화관광재단", "국립낙동강생물자원관",
    "충청북도동물위생시험소", "태권도진흥재단", "한국가스기술공사", "근로복지공단",
    "한국토지주택공사", "대우건설", "대구공공시설관리공단", "서울교통공사", "신용보증기금",
    "한국장학재단", "충남신용보증재단", "트라닉스", "인천공항시설관리", "창업진흥원", "에스알",
    "군인공제회", "한국장애인개발원", "국립공원공단", "마포구시설관리공단", "한국교통안전공단",
    "국립과학수사연구원", "충남대학교병원", "대한적십자사", "SK피유코어", "진우소프트이노베이션",
    "위츠", "크래프톤", "삼광랩트리", "푸드테크", "신성씨앤에스", "북구시설관리공단",
    "평택복지재단", "한국특허정보원", "산림청", "코레일관광개발", "경기도의료원",
    "SK머티리얼즈퍼포먼스", "한국동서발전", "한전KPS", "지에스차지비", "GS차지비",
    "경동물류", "대구텍", "상신브레이크", "와이즈원", "한화엔진", "중앙보훈병원",
    "부산항만공사", "금오석유화학", "한국인터넷진흥원", "국민건강보험공단",
    "서울특별시평생교육진흥원", "국립해양유산연구소", "한국중부발전", "성북구청", "구로구청",
    "강릉아산병원", "강동성심병원", "분당제생병원", "국립암센터", "한국원자력의학원",
    "원광대학교병원"
];

// 고정된 순서로 기업 리스트를 4개 행으로 나누기 (hydration 문제 방지)
const createRows = () => {
    const rowCount = 4;
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
        const start = Math.floor(i * companies.length / rowCount);
        const end = Math.floor((i + 1) * companies.length / rowCount);
        // 무한 스크롤을 위해 여러 번 복제
        const originalRow = companies.slice(start, end);
        const extendedRow = [...originalRow, ...originalRow, ...originalRow, ...originalRow];
        rows.push(extendedRow);
    }

    return rows;
};

interface ScrollingRowProps {
    companies: string[];
    speed: number;
    rowIndex: number;
}

function ScrollingRow({ companies, speed, rowIndex }: ScrollingRowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        let animationId: number;
        let startTime: number | null = null;
        let containerWidth: number | null = null;

        // 각 row마다 다른 시작 오프셋 적용
        const initialOffset = -(rowIndex * 500);
        setTranslateX(initialOffset);

        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            // 컨테이너 너비를 한 번만 계산
            if (containerWidth === null && containerRef.current) {
                containerWidth = containerRef.current.scrollWidth / 4;
            }

            const elapsed = currentTime - startTime;

            // 기본 위치에서 계속 왼쪽으로 이동
            const newTranslateX = initialOffset - (elapsed * speed) / 1000;

            // 컨테이너 너비의 1/4 지점에 도달하면 리셋
            if (containerWidth && newTranslateX <= -containerWidth) {
                startTime = currentTime;
                setTranslateX(initialOffset);
            } else {
                setTranslateX(newTranslateX);
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [speed, rowIndex, mounted]);

    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-3 will-change-transform"
                style={{
                    transform: `translateX(${translateX}px)`,
                    transition: 'none'
                }}
            >
                {companies.map((company, index) => (
                    <div
                        key={`${rowIndex}-${index}`}
                        className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm whitespace-nowrap flex-shrink-0"
                    >
                        {company}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HomeCompanySlider() {
    const [rows] = useState(() => createRows());
    const speeds = [30, 25, 35, 28]; // 각 row마다 살짝 다른 속도

    return (
        <div className="space-y-4">
            {rows.map((row, rowIndex) => (
                <ScrollingRow
                    key={rowIndex}
                    companies={row}
                    speed={speeds[rowIndex]}
                    rowIndex={rowIndex}
                />
            ))}
        </div>
    );
}