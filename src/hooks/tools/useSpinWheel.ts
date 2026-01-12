import {
  determineWinner,
  generateWheelSegments,
  getRandomRotation,
  getRandomSpinDuration,
  parseEntries,
  shuffleArray,
  sortAlphabetically,
  type SpinResult,
} from "@/utils/tools/spin-wheel/spinWheelUtils";
import { useCallback, useRef, useState } from "react";

const DEFAULT_ENTRIES = `Alex Johnson
Sarah Miller
David Chen
Emily Davis
Michael Wilson
Jessica Taylor
Robert Brown
Olivia White`;

export function useSpinWheel() {
  const [entries, setEntries] = useState(DEFAULT_ENTRIES);
  const [results, setResults] = useState<SpinResult[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [removeWinner, setRemoveWinner] = useState(false);
  const [latestWinner, setLatestWinner] = useState<SpinResult | null>(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const spinAudioRef = useRef<HTMLAudioElement | null>(null);
  const winAudioRef = useRef<HTMLAudioElement | null>(null);

  const entryList = parseEntries(entries);
  const segments = generateWheelSegments(entryList);

  const initAudio = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!spinAudioRef.current) {
      const spinAudio = new Audio("/audio/spin.mp3");
      spinAudio.loop = true;
      spinAudio.volume = 0.3;
      spinAudioRef.current = spinAudio;
    }

    if (!winAudioRef.current) {
      const winAudio = new Audio("/audio/crowd.wav");
      winAudio.volume = 0.5;
      winAudioRef.current = winAudio;
    }
  }, []);

  // Spin the wheel
  const spin = useCallback(() => {
    if (isSpinning || entryList.length === 0) return;

    setIsSpinning(true);

    const duration = getRandomSpinDuration();
    const finalRotation = rotation + getRandomRotation();

    setRotation(finalRotation);

    // Determine winner after spin
    setTimeout(() => {
      const POINTER_OFFSET = 270;
      const correctedRotation = (finalRotation + POINTER_OFFSET) % 360;

      const winner = determineWinner(correctedRotation, segments);

      if (winner) {
        const result: SpinResult = {
          id: Date.now().toString(),
          name: winner,
          timestamp: Date.now(),
        };

        setResults((prev) => [result, ...prev]);
        setLatestWinner(result);
        setShowWinnerModal(true);

        // Play win sound
        if (soundEnabled && winAudioRef.current) {
          setTimeout(() => {
            winAudioRef.current!.currentTime = 0;
            winAudioRef.current!.play().catch(() => {});
          }, 200);
        }

        if (removeWinner) {
          const newEntries = entryList.filter((name) => name !== winner);
          setEntries(newEntries.join("\n"));
        }
      }

      setIsSpinning(false);
    }, duration);
  }, [
    isSpinning,
    entryList,
    rotation,
    segments,
    soundEnabled,
    removeWinner,
    initAudio,
  ]);

  const reset = useCallback(() => {
    setRotation(0);
    setResults([]);
    setLatestWinner(null);
  }, []);

  const shuffle = useCallback(() => {
    const shuffled = shuffleArray(entryList);
    setEntries(shuffled.join("\n"));
  }, [entryList]);

  const sort = useCallback(() => {
    const sorted = sortAlphabetically(entryList);
    setEntries(sorted.join("\n"));
  }, [entryList]);

  const clearHistory = useCallback(() => {
    setResults([]);
    setLatestWinner(null);
  }, []);

  const deleteResult = useCallback(
    (id: string) => {
      setResults((prev) => {
        const newResults = prev.filter((r) => r.id !== id);

        // Update latest winner if it was deleted
        if (latestWinner?.id === id) {
          setLatestWinner(newResults[0] || null);
        }

        return newResults;
      });
    },
    [latestWinner]
  );

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;

      initAudio();

      if (spinAudioRef.current) {
        if (next) {
          spinAudioRef.current.currentTime = 0;
          spinAudioRef.current.play().catch(() => {});
        } else {
          spinAudioRef.current.pause();
        }
      }

      return next;
    });
  }, [initAudio]);

  const toggleRemoveWinner = useCallback(() => {
    setRemoveWinner((prev) => !prev);
  }, []);

  return {
    entries,
    setEntries,
    entryList,
    segments,
    results,
    isSpinning,
    rotation,
    soundEnabled,
    removeWinner,
    latestWinner,
    spin,
    reset,
    shuffle,
    sort,
    clearHistory,
    deleteResult,
    toggleSound,
    toggleRemoveWinner,

    showWinnerModal,
    setShowWinnerModal,
  };
}
