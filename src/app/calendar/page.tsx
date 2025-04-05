"use client";
import { useState } from "react";
import HamburgerMenu from "@/app/components/HamburgerMenu";
import { Sun, Moon } from "lucide-react";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [emotionData, setEmotionData] = useState<{
    [dateKey: string]: {
      emotion: string;
      longSummary: string;
      memo?: string;
    };
  }>({
    "2025-04-03": {
      emotion: "😔 슬픔",
      longSummary:
        "출근길에 비를 맞아 기분이 좋지 않았고, 업무도 많아 지쳤어요. 하지만 집에 와서 음악 들으며 좀 나아졌어요.",
    },
    "2025-04-04": {
      emotion: "😊 행복",
      longSummary: "오랜만에 친구를 만나 즐거운 시간을 보냈고, 맛있는 저녁도 함께 했어요.",
    },
    "2025-04-05": {
      emotion: "😊 행복",
      longSummary: "오늘은 정말 완벽한 하루였어요. 아침부터 햇살이 좋아 기분 좋게 일어났고, 친구들과 약속이 있어서 오랜만에 시내에 나갔어요. 카페에서 향긋한 커피를 마시며 두 시간 넘게 이야기꽃을 피웠고, 그 후에는 근처 공원에 가서 산책도 했어요. 벚꽃이 아직 조금 남아 있어서 사진도 많이 찍고, 서로의 근황을 나누며 오랜만에 깊은 대화를 나눌 수 있어서 좋았어요. 점심은 좋아하던 이탈리안 레스토랑에서 파스타랑 피자를 먹었는데, 신메뉴가 생각보다 너무 맛있어서 감탄했어요. 다 먹고 나서 근처 책방에 들렀는데, 오래 찾던 에세이를 우연히 발견해서 진짜 운이 좋다고 느꼈어요. 책 냄새도 좋았고, 조용한 분위기에서 혼자 시간을 보내는 것도 힐링이었어요. 저녁 무렵엔 다른 친구들이랑 합류해서 작은 홈파티도 열었어요. 각자 만든 음식들을 나눠 먹고, 조명 살짝 어둡게 하고 좋아하는 음악 틀어놓고 이런저런 이야기 나누는 그 분위기가 정말 따뜻했어요. 오늘 하루 종일 웃을 일이 많았고, 마음도 꽉 찬 느낌이라 기분 좋게 하루를 마무리할 수 있었어요. 이런 날은 오랜만이라 더 기억에 남을 것 같아요. 진짜, 오늘 같은 하루가 자주 있었으면 좋겠어요.",
    },
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const todayKey = new Date().toISOString().split("T")[0];

  const lightPalette = [
    { emotion: "공포", color: "#A0C4FF" },
    { emotion: "놀람", color: "#FFD6A5" },
    { emotion: "분노", color: "#FF6B6B" },
    { emotion: "슬픔", color: "#BBD0FF" },
    { emotion: "중립", color: "#EAEAEA" },
    { emotion: "행복", color: "#FDFFB6" },
    { emotion: "혐오", color: "#C5DCA0" },
  ];

  const darkPalette = [
    { emotion: "공포", color: "#264653" },
    { emotion: "놀람", color: "#A68A64" },
    { emotion: "분노", color: "#9B1D20" },
    { emotion: "슬픔", color: "#3A506B" },
    { emotion: "중립", color: "#6C757D" },
    { emotion: "행복", color: "#D4A373" },
    { emotion: "혐오", color: "#556B2F" },
  ];

  const palette = theme === "light" ? lightPalette : darkPalette;

  const getColorByEmotion = (emotion: string | undefined) => {
    if (!emotion) return theme === "light" ? "#fff" : "#1f2937";
    return palette.find((e) => emotion.includes(e.emotion))?.color || "#fff";
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(year, month + offset);
    setCurrentDate(newDate);
    setSelectedDate(null);
  };

  const emotionDatesThisMonth = Object.keys(emotionData).filter((dateStr) => {
    const date = new Date(dateStr);
    return date.getFullYear() === year && date.getMonth() === month;
  });

  return (
    <div
      className={`relative min-h-screen px-4 py-10 transition-colors duration-300
        ${theme === "light"
          ? "bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 text-gray-800"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100"
        }`}
    >
      <HamburgerMenu />

      <div className="flex flex-col md:flex-row gap-4 mt-20 w-full max-w-4xl justify-between items-start mx-auto">
        <div className="relative z-10 w-[350px]">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={() => changeMonth(-1)} className="text-2xl hover:text-blue-400">
              &lt;
            </button>
            <h2 className="text-xl font-semibold">{year}년 {month + 1}월</h2>
            <button onClick={() => changeMonth(1)} className="text-2xl hover:text-blue-400">
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-sm text-center">
            {weekdays.map((day) => (
              <div key={day} className="font-bold">{day}</div>
            ))}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const bgColor = getColorByEmotion(emotionData[key]?.emotion);
              const isToday = key === todayKey;
              return (
                <div
                  key={key}
                  onClick={() => emotionData[key]?.longSummary && setSelectedDate(key)}
                  className={`relative w-10 h-10 rounded-md border flex items-center justify-center transition cursor-pointer
                    ${isToday ? "ring-2 ring-blue-400 font-bold border-0" : ""}`}
                  style={{ backgroundColor: bgColor }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative w-[350px] min-h-[350px]">
          {selectedDate && emotionData[selectedDate] ? (
            <div
              className={`rounded-xl shadow-2xl p-5 text-sm z-40 max-h-[350px] overflow-y-auto
                ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-100"}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-500">{selectedDate}</p>
                  <p className="text-lg font-semibold mt-1">{emotionData[selectedDate].emotion}</p>
                </div>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="text-gray-400 hover:text-gray-600 text-lg"
                >
                  ×
                </button>
              </div>
              <div className="whitespace-pre-wrap break-words leading-relaxed text-sm mb-4">
                {emotionData[selectedDate].longSummary}
              </div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">내 메모</label>
              <textarea
                className="w-full h-20 border border-gray-300 rounded-md p-2 text-sm mb-3 resize-none 
             text-black dark:text-black bg-white dark:bg-white"
                placeholder="이날에 느낀 나만의 생각을 적어 보세요."
                value={emotionData[selectedDate].memo || ""}
                onChange={(e) => {
                  const newMemo = e.target.value;
                  setEmotionData((prev) => ({
                    ...prev,
                    [selectedDate]: {
                      ...prev[selectedDate],
                      memo: newMemo,
                    },
                  }));
                }}
              />
              <button
                onClick={() => setSelectedDate(null)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
              >
                저장하고 닫기
              </button>
            </div>
          ) : (
            <div
              className={`w-full h-full rounded-xl flex items-center justify-center text-sm
                ${theme === "light" ? "bg-gray-200 text-gray-500" : "bg-gray-600 text-gray-300"}`}
            >
              나무 자리 (임시)
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 mb-4 text-center z-20">
        <button
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full 
            transition hover:scale-105 mb-2 
            ${theme === "light" ? "bg-white/80 text-gray-700" : "bg-gray-600 text-gray-200"}`}
        >
          {theme === "light" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-300" />
          )}
        </button>
        <p className="text-xl font-bold">
          이달에 감정을 {emotionDatesThisMonth.length}일 기록하셨어요.
        </p>
      </div>
    </div>
  );
}
