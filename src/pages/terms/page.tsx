import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">서비스 이용약관</h1>
            <p className="text-xl text-white">Mewnion(묘연) 서비스 이용을 위한 약관</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-12">
              {/* Update Date */}
              <div className="mb-8 p-6 bg-purple-50 border-l-4 border-purple-500">
                <p className="text-sm text-gray-900 font-semibold mb-2">
                  ⚠️ 중요: 본 약관을 주의 깊게 읽어주시기 바랍니다
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">시행일자:</span> 2025년 1월 1일<br />
                  <span className="font-semibold">최종 수정:</span> 2025년 10월 12일<br />
                  <span className="font-semibold">버전:</span> v2.0
                </p>
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (목적)</h2>
                <p className="text-gray-600 mb-6">
                  본 약관은 주식회사 묘연(이하 "회사")이 운영하는 Mewnion(이하 "서비스")의 이용과 관련하여
                  회사와 회원 간의 권리, 의무 및 책임사항, 서비스 이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (용어의 정의)</h2>
                <p className="text-gray-600 mb-4">본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <ul className="list-decimal pl-6 text-gray-600 space-y-3">
                    <li>"서비스"란 회사가 제공하는 Mewnion 플랫폼 및 이에 부수되는 제반 서비스를 의미하며, 여기에는 다음이 포함됩니다:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>미니홈피(캣룸) 서비스</li>
                        <li>반려동물 프로필 및 건강 관리 서비스</li>
                        <li>IoT 기기 연동 서비스</li>
                        <li>AI 기반 분석 및 추천 서비스 (뮤틀러 AI)</li>
                        <li>커뮤니티 및 소셜 네트워크 서비스</li>
                        <li>전자상거래 서비스</li>
                        <li>NFT 거래 및 Web3 서비스</li>
                      </ul>
                    </li>
                    <li>"회원"이란 본 약관에 동의하고 회사와 서비스 이용계약을 체결하여 회원 자격을 부여받은 자를 말합니다.</li>
                    <li>"아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 고유한 문자, 숫자 또는 그 조합을 의미합니다.</li>
                    <li>"비밀번호"란 회원이 부여받은 아이디와 일치된 회원임을 확인하고 회원의 권익 및 비밀보호를 위해 회원이 설정한 문자, 숫자 또는 특수문자의 조합을 말합니다.</li>
                    <li>"게시물"이란 회원이 서비스를 이용함에 있어 회원이 서비스에 게시한 문자, 문서, 그림, 음성, 영상 또는 이들의 조합으로 이루어진 모든 정보를 말합니다.</li>
                    <li>"포인트"란 서비스 내에서 사용 가능한 가상의 화폐 단위를 의미합니다.</li>
                    <li>"유료 서비스"란 회사가 유료로 제공하는 각종 온라인 디지털 콘텐츠 및 제반 서비스를 의미합니다.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (약관의 게시와 개정)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면 또는 연결 화면에 게시합니다.</li>
                  <li>회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
                  <li className="font-semibold text-red-600">회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리한 약관의 개정인 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.</li>
                  <li>회원은 변경된 약관에 대해 거부할 권리가 있습니다. 회원은 변경된 약관이 공지된 지 15일 이내에 거부 의사를 표명할 수 있습니다. 회원이 거부하는 경우 회사는 해당 회원과의 이용계약을 해지할 수 있습니다. 만약 회원이 약관의 변경에 대해 이의를 제기하지 않는 경우 회원이 약관의 변경을 승인한 것으로 봅니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (약관 외 준칙)</h2>
                <p className="text-gray-600 mb-6">
                  본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」,
                  「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등
                  관련 법령 또는 상관례에 따릅니다.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제5조 (서비스의 제공 및 변경)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회사는 다음과 같은 서비스를 제공합니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>미니홈피(캣룸) 생성 및 관리</li>
                      <li>반려동물 프로필 등록 및 관리</li>
                      <li>IoT 기기 연동을 통한 반려동물 활동 데이터 수집 및 모니터링</li>
                      <li>AI 기반 반려동물 건강 분석 및 추천 (뮤틀러 AI)</li>
                      <li>커뮤니티 게시판 및 소셜 기능</li>
                      <li>전자상거래 및 결제 서비스</li>
                      <li>NFT 발행, 거래 및 Web3 지갑 연동</li>
                      <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 제공하는 일체의 서비스</li>
                    </ul>
                  </li>
                  <li>회사는 서비스의 내용, 품질, 운영 등에 대해 상당한 이유가 있는 경우 이를 변경할 수 있으며, 변경 전에 해당 내용을 서비스 내에 공지합니다.</li>
                  <li className="font-semibold">회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련 법령에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.</li>
                </ol>

                <div className="bg-red-50 p-4 rounded-lg mb-6 border-l-4 border-red-500">
                  <p className="font-semibold text-red-600 mb-2">⚠️ AI 서비스 이용 시 주의사항</p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• AI 분석 결과는 참고용이며, 의학적 진단이나 치료를 대체하지 않습니다.</li>
                    <li>• 반려동물의 건강 이상이 의심되는 경우 반드시 수의사와 상담하시기 바랍니다.</li>
                    <li>• 회사는 AI 분석 결과에 대한 정확성을 보장하지 않으며, 이에 따른 손해에 대해 책임지지 않습니다.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제6조 (서비스의 중단)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회사는 다음 각 호에 해당하는 경우 서비스 제공을 일시적으로 중단할 수 있습니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 서비스 내용의 수정을 위한 경우</li>
                      <li>해킹 등의 전자적 침해사고, 통신사고, 회원들의 비정상적인 서비스 이용행태, 미처 예상하지 못한 서비스 불안정성에 대응하기 위한 경우</li>
                      <li>관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는 경우</li>
                      <li>천재지변, 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능한 경우</li>
                      <li>회사의 제휴사와의 계약 종료, 정부의 명령/규제 등 회사의 제반 사정으로 서비스를 유지할 수 없는 경우</li>
                    </ul>
                  </li>
                  <li>회사는 제1항의 사유로 서비스 제공이 일시적으로 중단됨으로 인하여 회원 또는 제3자가 입은 손해에 대하여 배상하지 않습니다. <span className="font-semibold">단, 회사의 고의 또는 중대한 과실에 의한 경우에는 그러하지 아니합니다.</span></li>
                  <li>회사는 서비스 중단의 경우 사전에 서비스 초기화면 또는 공지사항에 통지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 서비스 중단(시스템 관리자의 고의, 과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제7조 (회원가입)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관 및 개인정보 처리방침에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</li>
                  <li>회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</li>
                  <li>회사는 다음 각 호의 경우에는 회원가입을 거부하거나 사후에 회원자격을 상실시킬 수 있습니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우 (단, 회사의 재가입 승낙을 얻은 경우 예외)</li>
                      <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                      <li>허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우</li>
                      <li>만 14세 미만 아동이 법정대리인(부모 등)의 동의를 얻지 아니한 경우</li>
                      <li>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</li>
                      <li>서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우</li>
                    </ul>
                  </li>
                  <li>회원가입계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</li>
                  <li>회원은 등록사항에 변경이 있는 경우, 즉시 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다. 변경사항을 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제8조 (회원정보의 변경)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 아이디(ID) 등은 수정이 불가능합니다.</li>
                  <li>회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.</li>
                  <li>제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제9조 (회원의 아이디 및 비밀번호의 관리에 대한 의무)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li className="font-semibold text-red-600">회원의 아이디와 비밀번호에 관한 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.</li>
                  <li>회사는 회원의 아이디가 개인정보 유출 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나, 회사 및 회사의 운영자로 오인할 우려가 있는 경우, 해당 아이디의 이용을 제한할 수 있습니다.</li>
                  <li className="font-semibold">회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 회사에 통지하고 회사의 안내에 따라야 합니다.</li>
                  <li className="font-semibold text-red-600">제3항의 경우 해당 회원이 회사에 그 사실을 통지하지 않거나, 통지한 경우에도 회사의 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제10조 (회원탈퇴 및 자격 상실 등)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다. 다만, 탈퇴 신청 이전에 진행 중인 거래가 있는 경우에는 해당 거래가 완료된 이후에 탈퇴 처리됩니다.</li>
                  <li>회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지, 상실시킬 수 있습니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>가입 신청 시 허위 내용을 등록한 경우</li>
                      <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                      <li>서비스를 이용하여 법령 또는 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                      <li>회원이 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행하는 경우</li>
                      <li>타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</li>
                      <li>서비스의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하거나 광고성 정보를 전송하는 경우</li>
                      <li>정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터 바이러스 프로그램 등을 유포하는 경우</li>
                      <li>회사 또는 다른 회원, 제3자의 지적재산권을 침해하는 경우</li>
                      <li>타인의 개인정보, 이용자ID 및 비밀번호를 부정하게 사용하는 경우</li>
                      <li>회원이 자신의 홈페이지와 게시판에 음란물을 게재하거나 음란 사이트를 링크하는 경우</li>
                    </ul>
                  </li>
                  <li>회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</li>
                  <li className="font-semibold">회원자격 상실로 인하여 발생하는 손해는 회사가 책임지지 않으며, 회사는 회원자격 상실 처리 이후 해당 회원의 모든 데이터를 삭제할 수 있습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제11조 (회원에 대한 통지)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 회원이 지정한 전자우편주소, 서비스 내 쪽지, 문자메시지(SMS), 푸시알림 등으로 할 수 있습니다.</li>
                  <li>회사는 회원 전체에 대한 통지의 경우 7일 이상 서비스 초기화면 또는 팝업화면 등에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제12조 (게시물의 저작권)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.</li>
                  <li className="font-semibold">회원이 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 회원은 언제든지 고객센터 또는 서비스 내 관리기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.</li>
                  <li>회사는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 회원의 동의를 얻어야 합니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제13조 (게시물의 관리)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원의 게시물이 「정보통신망법」 및 「저작권법」 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조치를 취하여야 합니다.</li>
                  <li>회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.</li>
                  <li className="font-semibold">회사는 다음 각 호에 해당하는 게시물이나 자료를 사전통지 없이 삭제하거나 이동 또는 등록 거부할 수 있습니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>다른 회원 또는 제3자에게 심한 모욕을 주거나 명예를 손상시키는 내용인 경우</li>
                      <li>공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크시키는 경우</li>
                      <li>불법복제 또는 해킹을 조장하는 내용인 경우</li>
                      <li>영리를 목적으로 하는 광고일 경우</li>
                      <li>범죄와 결부된다고 객관적으로 인정되는 내용일 경우</li>
                      <li>다른 이용자 또는 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                      <li>회사에서 규정한 게시물 원칙에 어긋나거나, 게시판 성격에 부합하지 않는 경우</li>
                      <li>기타 관계법령에 위배된다고 판단되는 경우</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제14조 (저작권의 귀속 및 이용제한)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li className="font-semibold">회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
                  <li className="font-semibold text-red-600">회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
                  <li>회사는 약정에 따라 회원에게 귀속된 저작권을 사용하는 경우 당해 회원에게 통보하여야 합니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제15조 (회원의 의무)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원은 다음 행위를 하여서는 안 됩니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                      <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                      <li>회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위</li>
                      <li>기타 불법적이거나 부당한 행위</li>
                    </ul>
                  </li>
                  <li>회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제16조 (유료 서비스의 이용)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원은 회사가 제공하는 유료 서비스를 이용하고자 하는 경우 서비스 내 안내에 따라 이용신청 및 결제를 진행합니다.</li>
                  <li>회사는 유료 서비스 이용에 대한 요금, 결제방법, 환불정책 등을 사전에 고지하며, 회원은 이에 동의한 후 이용신청을 할 수 있습니다.</li>
                  <li className="font-semibold">회원이 결제수단에 대해 정당한 사용권한을 가지고 있는지의 여부를 확인하기 위해, 회사는 회원에게 증빙서류 제출을 요청할 수 있으며, 확인이 완료될 때까지 해당 거래 진행을 중지하거나 확인이 불가한 해당 거래를 취소할 수 있습니다.</li>
                  <li className="font-semibold text-red-600">유료 서비스의 대금 지불 방법은 서비스 내에서 안내하는 방법으로 하며, 회원의 개인정보 및 결제정보는 관련 법령에 따라 철저히 보호됩니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제17조 (청약철회 및 환불)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회원은 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조에 따라 디지털 콘텐츠의 제공이 개시된 경우 청약철회를 할 수 없습니다. 다만, 다음 각 호의 경우에는 예외로 합니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>가. 청약철회가 불가능하다는 사실을 표시사항에 포함하지 아니하거나 시용상품을 제공하지 아니한 경우</li>
                      <li>나. 제공된 디지털콘텐츠에 하자가 있는 경우</li>
                    </ul>
                  </li>
                  <li>회원은 유료 서비스 구매 시 결제한 대금에 대하여 회사가 정한 환불정책에 따라 환불을 요청할 수 있습니다.</li>
                  <li className="font-semibold">회사는 회원의 환불 요청이 있는 경우, 접수일로부터 3영업일 이내에 환불 처리합니다. 단, 결제수단별 환불 소요기간은 결제업체의 정책에 따릅니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-red-600">제18조 (면책조항)</h2>
                <div className="bg-red-50 p-6 rounded-lg mb-6 border-2 border-red-500">
                  <ol className="list-decimal pl-6 text-gray-600 space-y-3">
                    <li className="font-semibold">회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.</li>
                    <li className="font-semibold">회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.</li>
                    <li className="font-semibold">회사는 회원의 귀책사유로 인한 서비스 이용의 장애 또는 손해에 대하여 책임을 지지 않습니다.</li>
                    <li className="font-semibold text-red-600">회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                    <li className="font-semibold text-red-600">회사는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</li>
                    <li className="font-semibold text-red-600">회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.</li>
                    <li className="font-semibold text-red-600">회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
                    <li className="font-semibold text-red-600">AI 분석 서비스의 결과는 참고용이며, 회사는 AI 분석의 정확성, 완전성, 신뢰성에 대해 보증하지 않습니다. 회원은 AI 분석 결과에만 의존하여 의사결정을 해서는 안 되며, 특히 반려동물의 건강과 관련된 사항은 반드시 전문 수의사와 상담해야 합니다.</li>
                    <li className="font-semibold text-red-600">IoT 기기 연동 서비스는 기기 제조사 및 통신 환경에 따라 정확도와 안정성이 달라질 수 있으며, 회사는 IoT 기기의 오작동, 데이터 손실, 통신 장애 등으로 인한 손해에 대해 책임을 지지 않습니다.</li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제19조 (손해배상)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li className="font-semibold">회사 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다. 다만, 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.</li>
                  <li className="font-semibold text-red-600">회사가 제공하는 서비스의 이용과 관련하여 회사의 고의 또는 중과실에 의하지 아니하고 회원에게 발생한 손해에 대하여 회사는 책임을 지지 않습니다.</li>
                  <li className="font-semibold">회사가 손해배상책임을 부담하는 경우, 그 배상액은 회원이 지급한 서비스 이용료의 총액(무료 서비스의 경우 0원)을 초과하지 않습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제20조 (분쟁해결)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
                  <li>회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</li>
                  <li>회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제21조 (재판권 및 준거법)</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-3">
                  <li className="font-semibold">회사와 회원 간에 발생한 분쟁에 관한 소송은 제소 당시의 회원의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 회원의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</li>
                  <li className="font-semibold">회사와 회원 간에 제기된 소송에는 대한민국법을 적용합니다.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">제22조 (회원의 고충처리 및 분쟁해결)</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-gray-900 mb-2">고객센터 및 개인정보 관리책임자</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 이메일: support@mewnion.com</li>
                    <li>• 전화: 1588-0000 (평일 09:00-18:00)</li>
                    <li>• 주소: 서울특별시 강남구 테헤란로 123 (우: 06234)</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="font-bold text-gray-900 mb-3">부칙</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">공고일자:</span> 2024년 12월 25일
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">시행일자:</span> 2025년 1월 1일
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">버전:</span> v2.0
                  </p>
                  <p className="text-sm text-gray-500">
                    본 약관은 2025년 1월 1일부터 적용됩니다.
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
