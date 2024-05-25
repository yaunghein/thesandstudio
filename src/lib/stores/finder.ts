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
        icon: "https://res.cloudinary.com/dlhbpswom/image/upload/v1715763648/app-images/sand-scan_yqwnto.gif",
        handleClick: () => addShell({ id: "sand-scan", zIndex: 65 }),
        description:
          "Barrier-grid animation and stereography automation software.",
        mediaType: "img",
        mediaSrc: "",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "For All Thingkind",
        isOpen: false,
        icon: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763241/lotties/fatk_tdug6t.json",
        handleClick: () => goto("/for-all-thingkind"),
        description:
          "We embrace all forms, materials, and ideas, shaping them into products that  reflect a confluence of diverse inspirations and tangible craftsmanship.",
        mediaType: "img",
        mediaSrc: "",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Works",
        isOpen: false,
        icon: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763270/lotties/works_tyaamm.json",
        handleClick: () => goto("/works"),
        description: "Paid Works",
        mediaType: "img",
        mediaSrc: "",
      },
      {
        id: crypto.randomUUID(),
        type: "file",
        label: "Not Works",
        isOpen: false,
        icon: "https://res.cloudinary.com/dlhbpswom/image/upload/v1715763428/app-images/not-works_kxc53g.gif",
        handleClick: () => goto("/not-works"),
        description:
          "Valuing and cultivating the creative aspect of the human spirit, recognizing it as a powerful tool for solving problems, expressing oneself, and understanding the world. Encouraging innovation and original thought, breaking free from traditional constraints, and exploring new ideas without being hindered by fear or skepticism.",
        mediaType: "img",
        mediaSrc: "",
      },
    ],
  };
};
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
            label: "Direction of the Mind (1618?-1628?)",
            isOpen: false,
            data: [
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Brief.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715882609/challenges/direction-of-mind/BRIEF_zh8mps.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Challenge Material.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715883046/challenges/direction-of-mind/CHALLENGE_MATERIAL_skjd9o.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Cover.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715882611/challenges/direction-of-mind/COVER_io812u.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/rene-descartes-philosophical-essays-and-correspondence_aioyzn.webp",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/Teaser.gif",
                description: "This is description.",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Title.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc: "/Title.gif",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880762/challenges/direction-of-mind/CHALLENGE-MATERIAL-Ren%C3%A9-Descartes-PhilosophicalEssays-and-Correspondence-Page-2-to-28_lvxa4g.pdf",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-aung-pyae-kyaw/Submission_1_qlmlwo.gif",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880769/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_1_-_SEE_jacrjl.webp",
                        description: "This is description.",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 2 - OBSERVE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880768/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_2_-_OBSERVE_ojzzlf.webp",
                        description: "This is description.",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 3 - INVESTIGATE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880768/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_3_-_INVESTIGATE_og7wd8.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 4 - FIND EVIDENCE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_4_-_FIND_EVIDENCE_vfizgj.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 5 - ASSUME.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880768/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_5_-_ASSUME_xw2ywp.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "POSTER 6 - RULES.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880768/challenges/direction-of-mind/by-aung-kyaw-phyoe/POSTER_6_-_RULES_mntxmw.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "PROCESS - MINDMAP.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880769/challenges/direction-of-mind/by-aung-kyaw-phyoe/PROCESS-MINDMAP_wsnvvv.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "PROCESS - TYPE.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880768/challenges/direction-of-mind/by-aung-kyaw-phyoe/PROCESS_-_TYPE_tywhwe.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880755/challenges/direction-of-mind/by-cant-chall/Submission_1_wvp2lv.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880770/challenges/direction-of-mind/by-co-co-maung/Submission_1_ic6l7b.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/by-do-shine/Submission_1_p67oon.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880755/challenges/direction-of-mind/by-htet-aung-lin/Submission_1_iv6amy.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-kyaw-moe-khine/Submission_1_nomqxm.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-kyaw-moe-khine/Submission_2_u0agtr.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-lin-htet-aung/Submission_1_xtljj3.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-lin-htet-aung/Submission_2_oqsyyz.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/by-min-htet-dipar/Submission_1_grbz1r.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/by-min-htet-dipar/Submission_2_v6iy7k.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/by-min-htet-dipar/Submission_3_ylfdsc.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880770/challenges/direction-of-mind/by-min-khant/Submission_1_csen0g.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880756/challenges/direction-of-mind/by-min-sett-hein/Submission_1_b4qjeb.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880757/challenges/direction-of-mind/by-min-sett-hein/Submission_2_v93jlk.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880755/challenges/direction-of-mind/by-min-sett-hein/Submission_3_gf1885.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880755/challenges/direction-of-mind/by-min-sett-hein/Submission_4_aqrgny.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-nguyen-huy-hung/Submission_1_yngmrd.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880767/challenges/direction-of-mind/by-nguyen-huy-hung/Submission_2_qjcwfi.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880754/challenges/direction-of-mind/by-phyoe-hein-kyaw/Submission_1_yw8asw.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880754/challenges/direction-of-mind/by-phyoe-hein-kyaw/Submission_2_stp37c.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-rabbie/Submission_1_amwoq7.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-ryan-pyae/Submission_1_ow8eta.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-ryan-pyae/Submission_2_f3ja2l.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-ryan-pyae/Submission_3_cprzvk.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-ryan-pyae/Submission_4_thbmkl.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 5.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880763/challenges/direction-of-mind/by-ryan-pyae/Submission_5_mig0zo.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880754/challenges/direction-of-mind/by-sai-shwe-toe/Submission_1_wofdg2.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Motion.mp4",
                        isOpen: false,
                        mediaType: "video",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/video/upload/v1715880774/challenges/direction-of-mind/by-sai-shwe-toe/Motion_uynpis.mp4",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880758/challenges/direction-of-mind/by-thiha-min-zin/Flip_uyzv1g.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880760/challenges/direction-of-mind/by-thiha-min-zin/Horizontal1_at1slf.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880759/challenges/direction-of-mind/by-thiha-min-zin/Horizontal2_xrssrl.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Horizontal3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880759/challenges/direction-of-mind/by-thiha-min-zin/Horizontal3_wcz1xf.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880759/challenges/direction-of-mind/by-thiha-min-zin/Path1_b6uczd.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880760/challenges/direction-of-mind/by-thiha-min-zin/Path2_fjxebw.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Path3_vt4ysb.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Path4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Path4_oknrk1.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot1.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot1_tynauo.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880757/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot2_dtcfp9.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880757/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot3_xbxleu.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880758/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot4_cvatyx.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot5.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880758/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot5_vhq5hw.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot6.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot6_lquz3t.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Photoshoot7.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880760/challenges/direction-of-mind/by-thiha-min-zin/Photoshoot7_jjrkt8.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Question.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Question_thk3ph.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Sketches.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Sketches_hzikms.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Video.mp4",
                        isOpen: false,
                        mediaType: "video",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/video/upload/v1715880761/challenges/direction-of-mind/by-thiha-min-zin/Video_wztj3v.mp4",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880766/challenges/direction-of-mind/by-thihan-cho-oo/Submission_1_mzakqc.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880766/challenges/direction-of-mind/by-thihan-cho-oo/Submission_2_yoodyz.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880765/challenges/direction-of-mind/by-tom-lin/Submission_1_e180dm.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-tom-lin/Submission_2_xzdzlo.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-tom-lin/Submission_3_wusxtt.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-tom-lin/Submission_4_ron0fx.webp",
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
                        mediaSrc: "/wanna-submission.gif",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880769/challenges/direction-of-mind/by-win-hlaing-oo/Submission_1_oc7ord.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880769/challenges/direction-of-mind/by-win-hlaing-oo/Submission_2_vl842b.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-ye-lin-htet/Submission_1_w9gqz9.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880764/challenges/direction-of-mind/by-ye-lin-htet/Submission_2_cbwqhe.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880753/challenges/direction-of-mind/by-zarni/Submission_1_kv84wc.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 2.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880753/challenges/direction-of-mind/by-zarni/Submission_2_zfonvi.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 3.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880753/challenges/direction-of-mind/by-zarni/Submission_3_heaamm.webp",
                      },
                      {
                        id: crypto.randomUUID(),
                        type: "file",
                        label: "Submission 4.webp",
                        isOpen: false,
                        mediaType: "img",
                        mediaSrc:
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880753/challenges/direction-of-mind/by-zarni/Submission_4_bbnav8.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880766/challenges/direction-of-mind/by-zayar-htet-naing/Submission_1_mksyux.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880766/challenges/direction-of-mind/by-zin/Submission_1_sj0rhr.webp",
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
                          "https://res.cloudinary.com/dlhbpswom/video/upload/v1715880758/challenges/direction-of-mind/by-zwe-htet-arkar/Submission_1_tq8r1e.mov",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Teaser_Poster1_regivj.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Teaser_Poster2_vzrdhi.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/for-all-thingkind/sand-ambivalent-tote-bag/Teaser_Poster3_jzp30o.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster4.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Teaser_Poster4_bk0wsk.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Teaser Poster5.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Teaser_Poster5_vzrkxi.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Web Screen 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Web_Screen_1_ptv1d5.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "Web Screen 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880752/for-all-thingkind/sand-ambivalent-tote-bag/Web_Screen_2_gyx2ol.webp",
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
          // {
          //   id: crypto.randomUUID(),
          //   type: "folder",
          //   label: "SAND Rug",
          //   isOpen: false,
          //   data: [],
          // },
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
              "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880745/not-works/Cultural_Dimensions_of_Geert_Hofstede_1928-2020_2023_mqrieo.ai",
          },
          {
            id: crypto.randomUUID(),
            type: "file",
            label: "Hidden PPF Design Competition Submission (2023)",
            isMarquee: true,
            isOpen: false,
            mediaType: "pdf",
            mediaSrc:
              "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880749/not-works/Hiddern_PPF_Design_Competition_Submission_2023__compressed_qgc7yi.pdf",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/not-works/humanity-and-the-universe-book-2017/HATU-Bookshot_zlydch.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Cover-Art.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/not-works/humanity-and-the-universe-book-2017/HATU-Cover-Art_nsfk2p.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Cover-Art-2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/not-works/humanity-and-the-universe-book-2017/HATU-Cover-Art-2_eablzd.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Details.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880750/not-works/humanity-and-the-universe-book-2017/HATU-Details_euu4lx.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-In-the-memory-of-Carl-Sagan.webp",
                isMarquee: true,
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880750/not-works/humanity-and-the-universe-book-2017/HATU-In-the-memory-of-Carl-Sagan_kq6xip.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Pages.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/not-works/humanity-and-the-universe-book-2017/HATU-Pages_bmnsbq.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HATU-Spine.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880751/not-works/humanity-and-the-universe-book-2017/HATU-Spine_dwrdwy.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880750/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-A_x5jgf5.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-B.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880747/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-B_nuzsnj.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-C.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880749/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-C_rlhaoq.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guide-Page-D.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880750/not-works/marmor-hotel-2018/MMH-Brand-Guide-Page-D_qvzxfs.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Brand-Guidelines.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880750/not-works/marmor-hotel-2018/MMH-Brand-Guidelines_u2lfae.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Door-Tags.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880748/not-works/marmor-hotel-2018/MMH-Door-Tags_fmx00e.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Evenlope.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880748/not-works/marmor-hotel-2018/MMH-Evenlope_mey09i.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Matches.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880748/not-works/marmor-hotel-2018/MMH-Matches_bpuvup.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MMH-Name-Cards.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880749/not-works/marmor-hotel-2018/MMH-Name-Cards_ll5qcr.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880744/not-works/mottainia-magazine-2018/MOTT-Bookshot-1_allcpj.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Bookshot-2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880744/not-works/mottainia-magazine-2018/MOTT-Bookshot-2_b5ocfh.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Bookshot-3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880743/not-works/mottainia-magazine-2018/MOTT-Bookshot-3_gffbnh.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "MOTT-Pages.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880747/not-works/mottainia-magazine-2018/MOTT-Pages_vmyfo8.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880748/not-works/small-and-ordinary-book/SNO_Bookshot_1_wnsc6d.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880745/not-works/small-and-ordinary-book/SNO_Bookshot_2_wdbfdr.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880745/not-works/small-and-ordinary-book/SNO_Bookshot_3_fw9qqs.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 4.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880746/not-works/small-and-ordinary-book/SNO_Bookshot_4_mspm2h.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 5.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880745/not-works/small-and-ordinary-book/SNO_Bookshot_5_gchk13.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 6.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880747/not-works/small-and-ordinary-book/SNO_Bookshot_6_y2bxgi.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 7.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880747/not-works/small-and-ordinary-book/SNO_Bookshot_7_obq4i1.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SNO Bookshot 8.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880746/not-works/small-and-ordinary-book/SNO_Bookshot_8_zmtuz3.webp",
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
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_1_tiidue.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Bag 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_2_dpafxx.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Logo on Black.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Logo_on_Black_aoorzg.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Logo on White.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880733/works/all-we-need/AWN_Logo_on_White_cfwizv.jpg",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Name Card.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880733/works/all-we-need/AWN_Name_Card_b4xjpi.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/all-we-need/AWN_Tape_1_fk2jho.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Tape_2_r9ziya.webp ",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AWN Tape 3.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Tape_3_xvgmqk.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880739/works/another-club/AC_Coasters_onalyl.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Coffee Bags.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Coffee_Bags_ofov8x.webp",
              },
              // {
              //   id: crypto.randomUUID(),
              //   type: "file",
              //   label: "AC Drawings 1.webp",
              //   isOpen: false,
              //   mediaType: "img",
              //   mediaSrc:
              //     "/images/archives/works/another-club/AC Drawings 1.webp",
              // },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Logo.pdf",
                isOpen: false,
                mediaType: "pdf",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Logo_zh7gg0.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Mockups.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Mockups_lbhccj.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "AC Window Stickers.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Window_Stickers_e4u8s6.webp",
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
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/game-sauce/GS_Logo_wqq4dc.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GS Logo Animation.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1716573445/works/game-sauce/GS_Logo_Animation_wg2fmo.gif",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Collaterals_mgqkrz.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Documents.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Documents_rjkh7v.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Envenlope.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/grand-hotel/GH_Envenlope_chtjan.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Laundary Bag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Laundry_Bag_vljzng.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Logos.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/grand-hotel/GH_Logos_mmcfmz.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "GH Paperbag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/grand-hotel/GH_Paperbag_lchdgv.webp",
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
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Logo_elngx6.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "HOG Mascot.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Mascot_ri5p0c.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/performance-cbd/PFM_Logo_pnzak2.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "PFM Logo Animation.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1716611876/works/performance-cbd/PFM_Logo_Animation_aivauv.gif",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Alternate_Symbol_ww2mtm.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Colors.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/rio/RIO_Colors_tzoaxn.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Logo.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Logo_p3cjds.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "RIO Tote Bag.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/rio/RIO_Tote_Bag_yxwv8m.webp",
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
                label: "SB Farmer.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/sawbwa-morning-blend/SB_Farmer_yrwamk.gif",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Field.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Field_zpdr7s.gif",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB House.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880732/works/sawbwa-morning-blend/SB_House_f3abca.gif",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Plant 1.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880730/works/sawbwa-morning-blend/SB_Plant_1_ovykzn.gif",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Plant 2.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/sawbwa-morning-blend/SB_Plant_2_ynncob.gif",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "SB Seed.gif",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Seed_ciddwl.gif",
              },
              // {
              //   id: crypto.randomUUID(),
              //   type: "file",
              //   label: "SB Packaging.ai",
              //   isOpen: false,
              //   mediaType: "pdf",
              //   mediaSrc:
              //     "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/sawbwa-morning-blend/SB_Packaging_pg7gpx.ai",
              // },
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Alternate_Logos_tqr0v8.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Logos.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880744/works/the-other-cakes/TOC_Logos_beropf.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Misc.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Misc_p9euyo.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "TOC Tags and Sticker.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Tags_and_Sticker_w1uefd.webp",
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
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Apparels_1_l57ewl.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Apparels 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Apparels_2_qqdvqy.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Merch Kit.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Merch_Kit_bqhdan.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Mouse Pad.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Mouse_Pad_fasc3m.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Screens 1.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_1_wpvfbf.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Screens 2.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_2_cm2ksj.webp",
              },
              {
                id: crypto.randomUUID(),
                type: "file",
                label: "YG Stickers.webp",
                isOpen: false,
                mediaType: "img",
                mediaSrc:
                  "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Stickers_gjx0vi.webp",
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

    const open: { type: string; label: string }[] = [];
    const updateOpen = (files: File[]) => {
      for (const file of files) {
        if (file.type === "folder" && file.isOpen) {
          open.push({ type: file.type, label: file.label });
          updateOpen(file?.data || []);
        } else if (file.type === "file" && file.isOpen) {
          open.push({ type: file.type, label: file.label });
        }
      }
    };
    updateOpen(tab!.files);
    const path = `${tab!.label}/${
      open[0] ? open.map((i) => i.label).join("/") : ""
    }${open[0] && open[open.length - 1].type === "folder" ? "/" : ""}`;
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

// cus we only travel in folder level, the preview can't be seen
export function addHistory(tabs: Tab[], file: File | undefined = undefined) {
  // there is a bug in history depending on single click and double click
  FinderHistory.update((h) => [...h, deepClone(tabs)]);
  FilePreviewHistory.update((h) => [...h, deepClone(file)]);
  HistoryIndex.set(get(FinderHistory).length - 1);
}
