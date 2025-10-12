import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">개인정보 처리방침</h1>
            <p className="text-xl text-white">Mewnion(묘연)은 이용자의 개인정보를 최우선으로 보호합니다</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-12">
              {/* Update Date */}
              <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500">
                <p className="text-sm text-gray-900 font-semibold mb-2">
                  ⚠️ 중요: 반려동물 건강 정보 및 AI 분석 데이터를 포함한 개인정보 처리방침
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">시행일자:</span> 2025년 1월 1일<br />
                  <span className="font-semibold">최종 수정:</span> 2025년 10월 12일<br />
                  <span className="font-semibold">버전:</span> v2.0
                </p>
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (개인정보의 처리 목적)</h2>
                <p className="text-gray-600 mb-6">
                  주식회사 묘연(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리하고 있으며,
                  다음의 목적 이외의 용도로는 이용하지 않습니다. 이용 목적이 변경되는 경우에는
                  「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 회원 가입 및 관리</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증</li>
                  <li>회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인</li>
                  <li>서비스 부정이용 방지, 각종 고지·통지, 고충처리</li>
                  <li>만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 재화 또는 서비스 제공</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공</li>
                  <li>본인인증, 연령인증, 요금결제·정산, 채권추심</li>
                  <li>NFT 발행 및 거래, 암호화폐 지갑 연동</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-red-600">3. 반려동물 케어 서비스 (중요)</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li className="font-semibold text-red-600">반려동물 건강 정보 수집 및 분석 (민감정보 포함 가능)</li>
                  <li>IoT 기기를 통한 반려동물 활동량, 식사량, 배변 패턴 등 데이터 수집</li>
                  <li>반려동물 건강 이상 징후 탐지 및 알림</li>
                  <li>수의사 원격 상담 서비스 제공</li>
                  <li>반려동물 보험 청구 지원</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-red-600">4. AI 모델 학습 및 분석 (중요)</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li className="font-semibold text-red-600">뮤틀러 AI 건강 분석 서비스 제공</li>
                  <li>반려동물 행동 패턴 분석 및 맞춤형 케어 추천</li>
                  <li>질병 예측 모델 학습 (익명화된 데이터만 사용)</li>
                  <li>AI 음성인식 및 반려동물 음성 분석</li>
                  <li className="font-semibold">※ AI 학습에 사용되는 데이터는 반드시 비식별화 처리됩니다</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. 마케팅 및 광고 활용</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달</li>
                  <li>인구통계학적 특성에 따른 서비스 제공 및 광고 게재</li>
                  <li>서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
                  <li className="font-semibold">※ 마케팅 수신 동의는 선택사항이며, 거부 시에도 서비스 이용 가능</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제2조 (처리하는 개인정보의 항목)</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 필수 수집 항목</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">가. 회원가입 시</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>이메일 주소, 비밀번호(암호화 저장), 닉네임</li>
                    <li>본인인증 정보(CI, DI)</li>
                    <li>만 14세 미만인 경우: 법정대리인 정보(이름, 연락처, 동의 여부)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-900 mb-2">나. 반려동물 프로필 등록 시 (중요)</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li className="font-semibold">반려동물 이름, 종, 나이, 성별, 중성화 여부</li>
                    <li className="font-semibold">반려동물 사진 및 영상</li>
                    <li className="font-semibold">병력 정보 (선택): 과거 질병, 알레르기, 현재 복용 중인 약물</li>
                    <li className="font-semibold">담당 수의사 정보 (선택)</li>
                    <li className="font-semibold">보호자 연락처 (응급상황 대비)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-900 mb-2">다. IoT 기기 연동 시 (중요)</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li className="font-semibold">기기 고유 식별자(Device ID), 펌웨어 버전</li>
                    <li className="font-semibold">실시간 센서 데이터: 활동량, 심박수, 체온, GPS 위치</li>
                    <li className="font-semibold">급식 기록: 식사 시간, 식사량, 물 섭취량</li>
                    <li className="font-semibold">배변 기록: 배변 시간, 횟수, 이상 징후</li>
                    <li className="font-semibold">수면 패턴: 수면 시간, 수면 품질</li>
                    <li className="font-semibold">카메라 영상 (AI 분석용, 저장 기간: 7일)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 선택 수집 항목</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>주소(배송지), 전화번호, 생년월일</li>
                  <li>프로필 사진, 자기소개</li>
                  <li>반려동물 보험 정보 (보험사, 보험 번호)</li>
                  <li>Web3 지갑 주소 (NFT 거래 시)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. 자동 수집 항목</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
                  <li>기기 정보(OS, 화면 크기, 기기 고유번호), 브라우저 정보</li>
                  <li>결제 기록 (결제 수단, 금액, 일시)</li>
                  <li>광고 식별자(ADID, IDFA)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제3조 (개인정보의 처리 및 보유 기간)</h2>

                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">원칙</p>
                  <p className="text-gray-600">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시
                    동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 회원 정보</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>회원 탈퇴 시: 즉시 파기 (단, 아래 예외 사항 제외)</li>
                  <li>휴면 계정: 최종 접속일로부터 1년 경과 시 별도 분리 보관 (파기 전 30일 전 통지)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-red-600">2. 반려동물 건강 정보 (중요)</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li className="font-semibold text-red-600">회원 탈퇴 시: 즉시 파기 원칙</li>
                  <li className="font-semibold">단, 사용자가 명시적으로 동의한 경우 AI 학습용 익명화 데이터로 전환하여 보관 가능</li>
                  <li>IoT 센서 데이터: 수집 후 90일간 보관, 이후 자동 삭제</li>
                  <li>카메라 영상: 수집 후 7일간 보관, 이후 자동 삭제 (단, 사고 발생 시 최대 30일)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. 법령에 따른 보존</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                  <li>표시·광고에 관한 기록: 6개월 (전자상거래법)</li>
                  <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제4조 (개인정보의 제3자 제공)</h2>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-2 border-red-500">
                  <p className="font-semibold text-red-600 mb-2">⚠️ 중요 원칙</p>
                  <p className="text-gray-900">
                    회사는 <span className="font-bold underline">정보주체의 별도 동의가 없는 한</span> 개인정보를 제3자에게 제공하지 않습니다.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 제공 대상 및 목적 (동의 필요)</h3>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">가. 배송 서비스</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>제공받는 자: CJ대한통운, 한진택배 등 배송업체</li>
                    <li>제공 목적: 상품 배송</li>
                    <li>제공 항목: 수령인 이름, 전화번호, 배송지 주소</li>
                    <li>보유 기간: 배송 완료 후 3개월</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">나. 결제 서비스</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>제공받는 자: PG사(토스페이먼츠, KG이니시스 등)</li>
                    <li>제공 목적: 결제 및 환불 처리</li>
                    <li>제공 항목: 이름, 이메일, 결제 정보</li>
                    <li>보유 기간: 거래 종료 후 5년 (전자금융거래법)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-900 mb-2">다. 수의사 원격 상담 (선택적 동의)</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li className="font-semibold">제공받는 자: 제휴 동물병원 및 수의사</li>
                    <li className="font-semibold">제공 목적: 반려동물 건강 상담</li>
                    <li className="font-semibold">제공 항목: 반려동물 이름, 종, 나이, 건강 기록, 사진/영상</li>
                    <li className="font-semibold">보유 기간: 상담 종료 후 3년 (의료법)</li>
                    <li className="text-red-600 font-semibold">※ 상담 시 별도 동의 필요</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 법령에 따른 제공 (동의 불필요)</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>통계작성, 학술연구 등의 목적을 위해 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
                  <li>긴급한 생명, 신체, 재산의 이익을 위해 필요한 경우</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제5조 (개인정보처리의 위탁)</h2>

                <p className="text-gray-600 mb-4">
                  회사는 서비스 제공을 위해 아래와 같이 개인정보 처리업무를 외부 전문업체에 위탁하고 있습니다.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">수탁업체</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">위탁 업무</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">보유기간</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Amazon Web Services (AWS)</td>
                        <td className="border border-gray-300 px-4 py-2">클라우드 서버 호스팅</td>
                        <td className="border border-gray-300 px-4 py-2">회원 탈퇴 또는 위탁 종료 시</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-4 py-2">데이터베이스 관리</td>
                        <td className="border border-gray-300 px-4 py-2">회원 탈퇴 또는 위탁 종료 시</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Google LLC</td>
                        <td className="border border-gray-300 px-4 py-2">소셜 로그인 (OAuth)</td>
                        <td className="border border-gray-300 px-4 py-2">회원 탈퇴 또는 위탁 종료 시</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 px-4 py-2 font-semibold">OpenAI LP</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">AI 분석 서비스 (익명화 데이터만 전송)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">분석 완료 즉시 삭제</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">위탁 계약 시 준수 사항</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>개인정보보호 관련 법규 준수</li>
                    <li>개인정보에 관한 비밀유지</li>
                    <li>제3자 제공 금지</li>
                    <li>사고 시 책임 부담</li>
                    <li>위탁 종료 시 개인정보 반환 또는 파기</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제6조 (정보주체의 권리·의무 및 행사방법)</h2>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">✓ 정보주체의 권리</p>
                  <p className="text-gray-600">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 행사 가능한 권리</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>개인정보 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구 (단, 법령에서 보존 의무가 있는 경우 제외)</li>
                  <li>처리정지 요구</li>
                  <li>동의 철회 (단, 서비스 이용에 제한이 있을 수 있음)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 권리 행사 방법</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>웹사이트: 마이페이지 → 개인정보 관리</li>
                    <li>이메일: privacy@mewnion.com</li>
                    <li>전화: 1588-0000</li>
                    <li>우편: 서울특별시 강남구 테헤란로 123 (우: 06234) 묘연 개인정보보호팀</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. 처리 기한</h3>
                <p className="text-gray-600 mb-6">
                  회사는 정보주체의 권리 행사 요청을 받은 날로부터 <span className="font-bold">10일 이내</span>에
                  조치 결과를 통지합니다. (단, 정당한 사유가 있는 경우 처리 기한 연장 가능, 사전 통지)
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제7조 (개인정보의 파기)</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 파기 절차</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침에 따라 일정기간 저장 후 파기</li>
                  <li>법률에 의한 경우가 아니고서는 보유 목적 이외의 다른 목적으로 이용되지 않음</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 파기 방법</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>전자적 파일: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                  <li className="font-semibold text-red-600">IoT 센서 데이터: 암호화 키 폐기를 통한 복호화 불가 상태로 전환</li>
                  <li className="font-semibold text-red-600">영상 데이터: 물리적 저장 매체 완전 삭제 및 백업 데이터 동시 파기</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제8조 (개인정보의 안전성 확보조치)</h2>

                <p className="text-gray-600 mb-4">
                  회사는 「개인정보 보호법」 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적·물리적 조치를 하고 있습니다.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 관리적 조치</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>내부관리계획 수립 및 시행</li>
                  <li>개인정보 취급 직원의 최소화 및 교육 (연 2회 이상)</li>
                  <li>개인정보 접근 권한 관리</li>
                  <li>개인정보 보호 담당자 지정</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 기술적 조치</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li className="font-semibold">개인정보 암호화: 비밀번호 및 민감정보는 SHA-256 이상의 암호화 알고리즘 적용</li>
                  <li className="font-semibold">DB 암호화: AES-256 암호화 적용</li>
                  <li>해킹 등에 대비한 기술적 대책: 침입차단시스템(Firewall), 침입탐지시스템(IDS) 운영</li>
                  <li>백신 프로그램 설치 및 주기적 업데이트·점검</li>
                  <li>접속 기록 보관 및 위·변조 방지 조치 (최소 6개월 이상)</li>
                  <li className="font-semibold text-red-600">IoT 기기 통신 암호화: TLS 1.3 이상 적용</li>
                  <li className="font-semibold text-red-600">영상 데이터 종단간 암호화(E2EE) 적용</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. 물리적 조치</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>전산실, 자료보관실 등의 접근통제</li>
                  <li>개인정보가 포함된 서류, 보조저장매체 등의 잠금장치 설치</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 쿠키의 사용 목적</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>자동 로그인 기능 제공</li>
                  <li>이용자의 관심 분야에 따른 맞춤 서비스 제공</li>
                  <li>접속 빈도 및 방문 시간 분석, 이용자의 취향과 관심 분야 파악</li>
                  <li>각종 이벤트 참여 정도 및 방문 횟수 파악</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 쿠키 설정 거부 방법</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Chrome 브라우저</p>
                  <p className="text-gray-600 text-sm mb-2">
                    설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터 → 모든 쿠키 차단
                  </p>
                  <p className="font-semibold text-gray-900 mb-2 mt-3">Safari 브라우저</p>
                  <p className="text-gray-600 text-sm">
                    환경설정 → 개인정보 → 쿠키 및 웹 사이트 데이터 → 모든 쿠키 차단
                  </p>
                </div>

                <p className="text-red-600 text-sm mb-6">
                  ※ 단, 쿠키 설정을 거부할 경우 서비스 이용에 어려움이 있을 수 있습니다.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제10조 (개인정보 보호책임자)</h2>

                <p className="text-gray-600 mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                  정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6 border-2 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-4">개인정보 보호책임자</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">성명:</span> 개인정보보호책임자</p>
                    <p><span className="font-semibold">직책:</span> CPO (Chief Privacy Officer)</p>
                    <p><span className="font-semibold">연락처:</span> 1588-0000</p>
                    <p><span className="font-semibold">이메일:</span> privacy@mewnion.com</p>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3 mt-6">개인정보 보호담당부서</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">부서명:</span> 개인정보보호팀</p>
                    <p><span className="font-semibold">담당자:</span> 개인정보보호 담당자</p>
                    <p><span className="font-semibold">연락처:</span> 1588-0000</p>
                    <p><span className="font-semibold">이메일:</span> privacy@mewnion.com</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                  불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
                  회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제11조 (개인정보 열람청구)</h2>

                <p className="text-gray-600 mb-4">
                  정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">개인정보 열람청구 접수·처리 부서</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>부서명: 개인정보보호팀</li>
                    <li>연락처: 1588-0000</li>
                    <li>이메일: privacy@mewnion.com</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제12조 (권익침해 구제방법)</h2>

                <p className="text-gray-600 mb-4">
                  정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
                  한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <p className="font-semibold text-gray-900">개인정보분쟁조정위원회</p>
                      <p className="text-sm">전화: (국번없이) 1833-6972</p>
                      <p className="text-sm">홈페이지: www.kopico.go.kr</p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-900">개인정보침해신고센터 (한국인터넷진흥원)</p>
                      <p className="text-sm">전화: (국번없이) 118</p>
                      <p className="text-sm">홈페이지: privacy.kisa.or.kr</p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-900">대검찰청 사이버범죄수사단</p>
                      <p className="text-sm">전화: (국번없이) 1301</p>
                      <p className="text-sm">홈페이지: www.spo.go.kr</p>
                    </li>
                    <li>
                      <p className="font-semibold text-gray-900">경찰청 사이버안전국</p>
                      <p className="text-sm">전화: (국번없이) 182</p>
                      <p className="text-sm">홈페이지: ecrm.cyber.go.kr</p>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">제13조 (개인정보 처리방침 변경)</h2>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-500">
                  <p className="text-gray-600 mb-2">
                    이 개인정보 처리방침은 <span className="font-bold">2025년 1월 1일</span>부터 적용됩니다.
                  </p>
                  <p className="text-gray-600">
                    법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는
                    변경사항 시행일의 <span className="font-bold text-red-600">최소 7일 전</span>부터
                    홈페이지 공지사항을 통해 고지할 것입니다.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-8">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">공고일자:</span> 2024년 12월 25일<br />
                    <span className="font-semibold">시행일자:</span> 2025년 1월 1일<br />
                    <span className="font-semibold">버전:</span> v2.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
