import { writable, derived, get } from "svelte/store";
import type { Writable } from "svelte/store";
import { goto } from "$app/navigation";
import { addShell } from "./shell";
import deepClone from "$lib/utils/deepClone";

export type File = {
  id: string;
  type?: "folder" | "file";
  isOpen?: boolean;
  label: string;
  src?: string;
  mediaType?: "img" | "video" | "pdf";
  mediaSrc?: string;
  thumbnail?: string;
  handleClick?: () => void;
  icon?: string;
  description?: string;
  cid?: string;
  data?: File[];
  isMarquee?: boolean;
};

export type Tab = {
  label: string;
  isOpen: boolean;
  files: File[];
};

const getDesktopTab = (isOpen: boolean): Tab => {
  return {
    label: "Desktop",
    isOpen,
    files: [
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Sand Scan",
        isOpen: false,
        icon: "/lotties/sand-scan.json",
        handleClick: () => addShell({ id: "sand-scan", zIndex: 65 }),
        description:
          "Barrier-grid animation and stereography automation software.",
        mediaType: "img",
        mediaSrc:
          "https://www.musicmundial.com/en/wp-content/uploads/2022/01/What-would-happen-to-ITZY-Ryujin-almost-became-a-YG-Entertainment-trainee..jpg",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "For All Thingkind",
        isOpen: false,
        icon: "/lotties/fatk.json",
        handleClick: () => goto("/for-all-thingkind"),
        description:
          "We embrace all forms, materials, and ideas, shaping them into products that  reflect a confluence of diverse inspirations and tangible craftsmanship.n",
        mediaType: "img",
        mediaSrc:
          "https://www.musicmundial.com/en/wp-content/uploads/2022/01/What-would-happen-to-ITZY-Ryujin-almost-became-a-YG-Entertainment-trainee..jpg",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Works",
        isOpen: false,
        icon: "/lotties/works.json",
        handleClick: () => goto("/works"),
        description: "Work description",
        mediaType: "img",
        mediaSrc:
          "https://www.musicmundial.com/en/wp-content/uploads/2022/01/What-would-happen-to-ITZY-Ryujin-almost-became-a-YG-Entertainment-trainee..jpg",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Not Works",
        isOpen: false,
        icon: "/lotties/not-works.gif",
        handleClick: () => goto("/not-works"),
        description:
          "Valuing and cultivating the creative aspect of the human spirit, recognizing it as a powerful tool for solving problems, expressing oneself, and understanding the world. Encouraging innovation and original thought, breaking free from traditional constraints, and exploring new ideas without being hindered by fear or skepticism.",
        mediaType: "img",
        mediaSrc:
          "https://www.musicmundial.com/en/wp-content/uploads/2022/01/What-would-happen-to-ITZY-Ryujin-almost-became-a-YG-Entertainment-trainee..jpg",
      },
    ],
  };
};
// explorer ui mhr folder so arrow lyy twy byy mhr htae boh lo
// compress pdf too
// add thumbnail to video
// there are still webp images that are too large
const getArchiveTab = (isOpen: boolean): Tab => {
  return {
    label: "Archives",
    isOpen,
    files: [
      {
        id: crypto.randomUUID(),
        type: "folder",
        label: "Challenges",
        isOpen: false,
        data: [
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Direction of the Mind 1618? (2022)",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Brief.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/BRIEF.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Challenge Material.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/CHALLENGE MATERIAL.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Cover.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/COVER.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label:
                  "René Descartes Philosophical Essays and Correspondence.webp",
                isMarquee: true,
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/rene-descartes-philosophical-essays-and-correspondence.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser.mp4",
                thumbnail:
                  "/images/archives/challenges/direction-of-mind/thumbnail-teaser.webp",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/Teaser.mp4",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Title.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/Title.mp4",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label:
                  "CHALLENGE MATERIAL René Descartes PhilosophicalEssays and Correspondence-Page-2-to-28.pdf",
                isMarquee: true,
                isOpen: false,
                mediaType: "pdf",
                mediaSrc:
                  "/images/archives/challenges/direction-of-mind/CHALLENGE-MATERIAL-René-Descartes-PhilosophicalEssays-and-Correspondence-Page-2-to-28.pdf",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "folder",
                label: "Submissions",
                isOpen: false,
                data: [
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Aung Pyae Kyaw",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-pyae-kyaw/Submission.webp",
                        description: "This is description.",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Aung Soe Phyoe",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 1 - SEE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 1 - SEE.webp",
                        description: "This is description.",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 2 - OBSERVE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 2 - OBSERVE.webp",
                        description: "This is description.",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 3 - INVESTIGATE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 3 - INVESTIGATE.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 4 - FIND EVIDENCE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 4 - FIND EVIDENCE.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 5 - ASSUME.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 5 - ASSUME.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 6 - RULES.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER 6 - RULES.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "PROCESS - MINDMAP.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/PROCESS-MINDMAP.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "PROCESS - TYPE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-aung-kyaw-phyoe/PROCESS - TYPE.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By CantChall",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-cant-chall/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Co Co Maung",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-co-co-maung/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By DoShine",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-do-shine/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Htet Aung Lin",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-htet-aung-lin/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Kyaw Moe Khine",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-kyaw-moe-khine/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-kyaw-moe-khine/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Lin Htet Aung",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-lin-htet-aung/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-lin-htet-aung/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Min Htet Dipar",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-htet-dipar/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-htet-dipar/Submission 2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-htet-dipar/Submission 3.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Min Khant",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-khant/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Min Sett Hein",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-sett-hein/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-sett-hein/Submission 2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-sett-hein/Submission 3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-min-sett-hein/Submission 4.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Nguyễn Huy Hùng",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-nguyen-huy-hung/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-nguyen-huy-hung/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Phyoe Hein Kyaw",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-phyoe-hein-kyaw/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-phyoe-hein-kyaw/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Rabbie",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-rabbie/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Ryan Pyae",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ryan-pyae/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ryan-pyae/Submission 2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ryan-pyae/Submission 3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ryan-pyae/Submission 4.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 5.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ryan-pyae/Submission 5.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Sai Shwe Toe",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-sai-shwe-toe/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Motion.mp4",
                        isOpen: false,
                        mediaType: "video",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-sai-shwe-toe/Motion.mp4",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Thiha Min Zin",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Flip.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Flip.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Horizontal1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Horizontal2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Horizontal3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Path1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Path2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Path3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Path4.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot4.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot5.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot5.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot6.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot6.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot7.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot7.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Question.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Question.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Sketches.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Sketches.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Video.mp4",
                        isOpen: false,
                        mediaType: "video",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thiha-min-zin/Video.mp4",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Thihan Cho Oo",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thihan-cho-oo/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-thihan-cho-oo/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Tom Lin",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-tom-lin/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-tom-lin/Submission 2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-tom-lin/Submission 3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-tom-lin/Submission 4.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Wanna",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.gif",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-wanna/Submission 1.gif",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Win Hlaing Oo",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-win-hlaing-oo/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-win-hlaing-oo/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Ye Lin Htet",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ye-lin-htet/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-ye-lin-htet/Submission 2.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Zarni",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zarni/Submission 1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zarni/Submission 2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zarni/Submission 3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zarni/Submission 4.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Zayar Htet Naing",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zayar-htet-naing/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Zin",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zin/Submission 1.webp",
                      },
                    ],
                  },
                  {
                    id: crypto.randomUUID(),
                    type: "folder",
                    label: "By Zwe Htet Arkar",
                    isOpen: false,
                    data: [
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 1.mp4",
                        isOpen: false,
                        mediaType: "video",
                        mediaSrc:
                          "/images/archives/challenges/direction-of-mind/by-zwe-htet-arkar/Submission 1.mp4",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        type: "folder",
        label: "For All Thingkind",
        isOpen: false,
        data: [
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "SAND Ambilavent Tote Bag",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Teaser Poster1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Teaser Poster2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Teaser Poster3.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster4.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Teaser Poster4.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster5.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Teaser Poster5.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Web Screen 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Web Screen 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Web Screen 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Web Screen 2.webp",
              },
              // {
              //   id: crypto.randomUUID(),
              //   type: "file",
              //   label: "Web Screen Motion.mp4",
              //   isOpen: false,
              //   mediaType: "video",
              //   mediaSrc:
              //     "/images/archives/for-all-thingkind/sand-ambivalent-tote-bag/Web Screen Motion.mp4",
              // },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "SAND Rug",
            isOpen: false,
            data: [],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        type: "folder",
        label: "Not Works",
        isOpen: false,
        data: [
          {
            id: crypto.randomUUID(),
            type: "file",
            label: "Cultural Dimensions of Geert Hofstede 1928-2020 (2023)",
            isMarquee: true,
            isOpen: false,
            mediaType: "pdf",
            mediaSrc:
              "/images/archives/not-works/Cultural Dimensions of Geert Hofstede 1928-2020 (2023).pdf",
          },
          {
            id: crypto.randomUUID(),
            type: "file",
            label: "Hidden PPF Design Competition Submission (2023)",
            isMarquee: true,
            isOpen: false,
            mediaType: "pdf",
            mediaSrc:
              "/images/archives/not-works/Hiddern PPF Design Competition Submission (2023)_compressed.pdf",
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Humanity and The Universe Book (2017)",
            isMarquee: true,
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Bookshot.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Bookshot.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Cover-Art.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Cover-Art.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Cover-Art-2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Cover-Art-2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Details.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Details.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-In-the-memory-of-Carl-Sagan.webp",
                isMarquee: true,
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-In-the-memory-of-Carl-Sagan.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Pages.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Pages.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Spine.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/humanity-and-the-universe-book-2017/HATU-Spine.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Marmor Hotel (2018)",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-A.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-A.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-B.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-B.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-C.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-C.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-D.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-D.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guidelines.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Brand-Guidelines.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Door-Tags.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Door-Tags.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Evenlope.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Evenlope.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Matches.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Matches.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Name-Cards.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/marmor-hotel-2018/MMH-Name-Cards.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "MOTTAINAI Magazine (2018)",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Bookshot-1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/mottainia-magazine-2018/MOTT-Bookshot-1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Bookshot-2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/mottainia-magazine-2018/MOTT-Bookshot-2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Bookshot-3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/mottainia-magazine-2018/MOTT-Bookshot-3.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Pages.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/mottainia-magazine-2018/MOTT-Pages.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Small and Ordinary Book (Red Dot Awards 2018)",
            isMarquee: true,
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 3.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 4.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 4.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 5.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 5.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 6.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 6.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 7.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 7.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 8.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/not-works/small-and-ordinary-book/SNO Bookshot 8.webp",
              },
            ],
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        type: "folder",
        label: "Works",
        isOpen: false,
        data: [
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "_AllWeNeed.",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Bag 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/all-we-need/AWN Bag 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Bag 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/all-we-need/AWN Bag 2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Logo on Black.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/all-we-need/AWN Logo on Black.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Logo on White.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/all-we-need/AWN Logo on White.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Name Card.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/all-we-need/AWN Name Card.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/all-we-need/AWN Tape 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/all-we-need/AWN Tape 2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/all-we-need/AWN Tape 3.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Another Club",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Coasters.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/another-club/AC Coasters.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Coffee Bags.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/another-club/AC Coffee Bags.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Drawings 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/another-club/AC Drawings 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Logos.pdf",
                isOpen: false,
                mediaType: "pdf",
                mediaSrc: "/images/archives/works/another-club/AC Logos.pdf",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Mockups.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/another-club/AC Mockups.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Window Stickers.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/another-club/AC Window Stickers.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Game Sauce",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GS Logo.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/game-sauce/GS Logo.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GS Logo Animation.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/game-sauce/GS Logo Animation.mp4",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Grand Hotel",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Collaterals.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/grand-hotel/GH Collaterals.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Documents.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/grand-hotel/GH Documents.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Envenlope.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/grand-hotel/GH Envenlope.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Laundary Bag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/grand-hotel/GH Laundry Bag.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Logos.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/grand-hotel/GH Logos.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Paperbag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/grand-hotel/GH Paperbag.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "HOG",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HOG Logo.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/hog/HOG Logo.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HOG Mascot.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/hog/HOG Mascot.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Performance CBD",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "PFM Logo.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/performance-cbd/PFM Logo.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "PFM Logo Animation.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/performance-cbd/PFM Logo Animation.mp4",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "RIO",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Alternate Symbol.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/rio/RIO Alternate Symbol.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Colors.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/rio/RIO Colors.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Logo.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/rio/RIO Logo.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Tote Bag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/images/archives/works/rio/RIO Tote Bag.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Sawbwa Morning Blend",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Farmer.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Farmer.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Field.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Field.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB House.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB House.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Plant 1.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Plant 1.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Plant 2.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Plant 2.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Seed.mp4",
                isOpen: false,
                mediaType: "video",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Seed.mp4",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Packaging.pdf",
                isOpen: false,
                mediaType: "pdf",
                mediaSrc:
                  "/images/archives/works/sawbwa-morning-blend/SB Packaging.pdf",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "The Other Cakes",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Alternate Logos.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/the-other-cakes/TOC Alternate Logos.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Logos.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/the-other-cakes/TOC Logos.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Misc.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/the-other-cakes/TOC Misc.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Tags and Sticker.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/the-other-cakes/TOC Tags and Sticker.webp",
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            type: "folder",
            label: "Yangon Galacticos",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Apparels 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Apparels 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Apparels 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Apparels 2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Merch Kit.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Merch Kit.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Mouse Pad.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Mouse Pad.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Screens 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Screens 1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Screens 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Screens 2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Stickers.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "/images/archives/works/yangon-galacticos/YG Stickers.webp",
              },
            ],
          },
        ],
      },
    ],
  };
};
const getAboutTab = (isOpen: boolean): Tab => {
  return {
    label: "About",
    isOpen,
    files: [
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "We are SAND",
        isOpen: false,
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Our Services",
        isOpen: false,
      },
    ],
  };
};
const getContactTab = (isOpen: boolean): Tab => {
  return {
    label: "Contact",
    isOpen,
    files: [
      // {
      //   id: crypto.randomUUID(),
      //   type: "file",
      //   label: "Inquiry",
      //   isOpen: false,
      // },
      // {
      //   id: crypto.randomUUID(),
      //   type: "file",
      //   label: "Social Media",
      //   isOpen: false,
      // },
    ],
  };
};
export const tabs: Tab[] = [
  getDesktopTab(true),
  getArchiveTab(false),
  getAboutTab(false),
  getContactTab(false),
];
export const initialArchiveOpenTabs: Tab[] = [
  getDesktopTab(false),
  getArchiveTab(true),
  getAboutTab(false),
  getContactTab(false),
];
export const initialAboutOpenTabs: Tab[] = [
  getDesktopTab(false),
  getArchiveTab(false),
  getAboutTab(true),
  getContactTab(false),
];
export const initialContactOpenTabs: Tab[] = [
  getDesktopTab(false),
  getArchiveTab(false),
  getAboutTab(false),
  getContactTab(true),
];

export const Tabs: Writable<Tab[]> = writable(deepClone(tabs));
export const openArchiveTab = () => Tabs.set(initialArchiveOpenTabs);
export const openAboutTab = () => Tabs.set(initialAboutOpenTabs);
export const openContactTab = () => Tabs.set(initialContactOpenTabs);

export const FilePreview: Writable<File | undefined> = writable();
export const FinderOpenPath = derived(
  [Tabs, FilePreview],
  ([$tabs, $preview]) => {
    const tab = $tabs.find((tab) => tab.isOpen);

    const open: string[] = [];
    const updateOpen = (files: File[]) => {
      for (const file of files) {
        if (file.type === "folder" && file.isOpen) {
          open.push(file.label as string);
          updateOpen(file?.data || []);
        } else if (file.isOpen) {
          open.push(file.label as string);
        }
      }
    };
    updateOpen(tab!.files);
    const path = `${tab!.label}/${open.join("/")}${open[0] ? "/" : ""}${
      $preview ? $preview.label : ""
    }`;
    return path;
  },
);
export const HistoryIndex: Writable<number> = writable(0);
export const FinderHistory: Writable<Tab[][]> = writable([deepClone(tabs)]);
export const FilePreviewHistory: Writable<(File | undefined)[]> = writable([
  undefined,
]);
const PreviousSelectedFileLevel: Writable<number> = writable(-1);

export const handleFileClick = (file: File) => {
  const selectedFileLevel = getNestedLevel(
    get(Tabs).find((tab) => tab.isOpen)!.files,
    file.id,
  );

  Tabs.update((tabs: Tab[]) => {
    const findAndUpdateIsOpen = (files: File[]) => {
      for (const item of files) {
        if (item.data && item.data.length > 0) {
          findAndUpdateIsOpen(item.data);
        }
        const itemLevel = getNestedLevel(
          get(Tabs).find((tab) => tab.isOpen)!.files,
          item.id,
        );
        if (selectedFileLevel === itemLevel || selectedFileLevel < itemLevel) {
          item.isOpen = false;
        }
        if (item.id === file.id) {
          item.isOpen = !item.isOpen;
        }
      }
    };
    tabs.forEach((tab) => findAndUpdateIsOpen(tab.files));
    return tabs;
  });

  file.type === "file" && FilePreview.set(file);
  file.type === "folder" && FilePreview.set(undefined);
  if (get(PreviousSelectedFileLevel) !== selectedFileLevel) {
    addHistory(get(Tabs), file);
  }
  PreviousSelectedFileLevel.set(selectedFileLevel);
};

export const handleFileDoubleClick = (file: File | undefined) => {
  if (file?.type !== "file") return;
  addShell({ id: file?.id, zIndex: 65, file });
};

function getNestedLevel(files: File[], fileId: string, level = 0) {
  for (const file of files) {
    if (file.id === fileId) {
      return level;
    }
    if (file.data && file.data.length > 0) {
      const nestedLevel: number = getNestedLevel(file.data, fileId, level + 1);
      if (nestedLevel >= 0) {
        return nestedLevel;
      }
    }
  }
  return -1;
}

export function addHistory(tabs: Tab[], file: File | undefined = undefined) {
  // there is a bug in history depending on single click and double click
  FinderHistory.update((h) => [...h, deepClone(tabs)]);
  FilePreviewHistory.update((h) => [...h, deepClone(file)]);
  HistoryIndex.set(get(FinderHistory).length - 1);
}
