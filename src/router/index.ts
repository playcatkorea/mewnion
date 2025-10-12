import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./config";
import { navigatePromise, setNavigate } from "./navigator";
import { goToContact, goToRoute, showFeedback } from "../utils/navigation";

type CtaRule = {
  match: (normalized: string, raw: string) => boolean;
  handler?: () => void;
  message: string;
  tone?: "success" | "info";
  requireAuth?: boolean;
};

const normalize = (label: string) => label.replace(/\s+/g, "").toLowerCase();

const includesAny = (source: string, keywords: string[]) =>
  keywords.some((keyword) => source.includes(keyword));

const getAuthSnapshot = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const snapshot = (window as any).__mewnionAuth;
  if (snapshot && typeof snapshot.isAuthenticated === "boolean") {
    return snapshot as { isAuthenticated: boolean; user: unknown };
  }
  return { isAuthenticated: false, user: null };
};

const CTA_RULES: CtaRule[] = [
  {
    match: (normalized) =>
      includesAny(normalized, ["입양신청", "입양문의", "입양상담", "입양보기"]),
    handler: goToContact("adoption"),
    message: "입양 신청이 접수되었어요! 담당자가 곧 연락드릴게요.",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["후원", "sponsor", "donate", "기부", "도움주기"]),
    handler: goToRoute("/market/sponsor"),
    message: "따뜻한 후원 의사가 전달되었습니다. 정말 감사해요!",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["구매", "주문", "결제", "장바구니", "buy", "purchase"]),
    handler: goToRoute("/market/goods"),
    message: "가상의 주문이 완료되었습니다! 확인 메일을 곧 보내드릴게요.",
    requireAuth: true,
  },
  {
    match: (normalized) => includesAny(normalized, ["파트너", "제휴", "협력", "브랜드신청"]),
    handler: goToContact("brand"),
    message: "브랜드 파트너 문의가 접수되었어요. 담당자가 곧 연락드릴게요.",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["참여", "참가", "응모", "join", "participate", "등록", "지원"]),
    handler: goToRoute("/community"),
    message: "참여 신청이 완료되었습니다! 함께해 주셔서 감사해요.",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["구독", "subscribe", "팔로우", "follow", "뉴스레터"]),
    message: "구독이 완료되었습니다! 새로운 소식을 가장 먼저 전해드릴게요.",
  },
  {
    match: (normalized) => includesAny(normalized, ["투표", "vote"]),
    handler: goToRoute("/web3"),
    message: "투표가 성공적으로 반영되었습니다.",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["강의개설", "강의제안", "강의등록", "coursecreate"]),
    handler: goToRoute("/academy/create"),
    message: "강의 개설 제안이 접수되었어요. 운영진이 검토 중입니다!",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["수강신청", "강의신청", "applycourse", "academyjoin"]),
    handler: goToRoute("/signup"),
    message: "수강 신청이 완료되었습니다! 마이페이지에서 바로 확인해 주세요.",
    requireAuth: true,
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["강의보기", "커리큘럼", "academyview", "살펴보기"]),
    handler: goToRoute("/academy"),
    message: "아카데미 강의 목록으로 안내해 드릴게요.",
    tone: "info",
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["뮤틀러", "카메라", "iot", "mewtler", "연동"]),
    handler: goToRoute("/mewtler"),
    message: "뮤틀러 AI 센터로 이동합니다.",
    tone: "info",
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["분석시작", "분석하기", "analysis", "진단"]),
    handler: goToRoute("/login?next=ai-analysis"),
    message: "AI 분석을 시작할 준비가 되었어요. 로그인 후 바로 진행됩니다!",
    requireAuth: true,
  },
  {
    match: (normalized) => includesAny(normalized, ["게임시작", "playgame", "랭킹전"]),
    handler: goToRoute("/games"),
    message: "게임 허브로 이동합니다. 새로운 이벤트가 기다리고 있어요!",
    tone: "info",
  },
  {
    match: (normalized) =>
      includesAny(normalized, ["퍼니버스입장", "퍼니버스탐험", "furniverse"]),
    handler: goToRoute("/furniverse"),
    message: "퍼니버스 게이트가 열렸어요! 새로운 행성을 탐험해 보세요.",
    tone: "info",
  },
  {
    match: (normalized, raw) =>
      includesAny(normalized, ["자세히보기", "더보기", "story", "learnmore"]) &&
      !includesAny(normalized, ["브랜드", "강의"]),
    handler: goToRoute("/news"),
    message: "최신 소식으로 안내해 드릴게요.",
    tone: "info",
  },
  {
    match: (normalized) => includesAny(normalized, ["문의", "문의하기", "contact"]),
    handler: goToContact(),
    message: "문의 내용이 접수되었습니다. 빠르게 답변드릴게요!",
    requireAuth: true,
  },
  {
    match: (normalized) => includesAny(normalized, ["상담", "상담신청", "consult"]),
    handler: goToContact(),
    message: "상담 요청이 등록되었어요. 곧 연락드릴게요.",
    requireAuth: true,
  },
  {
    match: (normalized) => includesAny(normalized, ["로그인", "signin", "login"]),
    handler: goToRoute("/login"),
    message: "로그인 페이지로 안내합니다.",
    tone: "info",
  },
  {
    match: (normalized) => includesAny(normalized, ["회원가입", "가입하기", "signup", "register"]),
    handler: goToRoute("/signup"),
    message: "회원가입을 바로 진행할 수 있도록 페이지를 열었어요!",
    tone: "info",
  },
];

const getRuleForLabel = (rawLabel: string) => {
  const normalized = normalize(rawLabel);
  return CTA_RULES.find((rule) => rule.match(normalized, rawLabel));
};

export { navigatePromise };

export function AppRoutes() {
  const navigate = useNavigate();
  const element = useRoutes(routes);

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  useEffect(() => {
    const handleGlobalCta = (event: MouseEvent) => {
      const buttonElement = (event.target as HTMLElement).closest<HTMLButtonElement>("button");
      if (!buttonElement) {
        return;
      }
      if (buttonElement.dataset.cta === "manual") {
        return;
      }
      if (buttonElement.type === "submit") {
        return;
      }

      const label = buttonElement.textContent?.replace(/\s+/g, " ").trim();
      if (!label) {
        return;
      }

      const rule = getRuleForLabel(label);
      if (!rule) {
        return;
      }

      event.preventDefault();
      const auth = getAuthSnapshot();

      if (rule.requireAuth && !auth.isAuthenticated) {
        showFeedback("로그인이 필요합니다. 로그인 페이지로 이동할게요.", "info");
        goToRoute("/login")();
        return;
      }

      rule.handler?.();
      showFeedback(rule.message, rule.tone ?? "success");
    };

    document.addEventListener("click", handleGlobalCta);

    return () => {
      document.removeEventListener("click", handleGlobalCta);
    };
  }, []);

  return element;
}
