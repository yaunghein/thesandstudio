<script>
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import { removeShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";
  import ButtonClose from "$lib/components/ButtonClose.svelte";
</script>

<div
  use:drag
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[71rem] aspect-square mix-blend-multiply pointer-events-none"
>
  <!-- <div class="w-full h-full bg-sand-blue"></div> -->

  <div class="w-full aspect-square flex items-center">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1154 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style="mix-blend-mode:multiply" filter="url(#filter0_b_375_91)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M430.491 356.274V3H723.509V356.274L1059.49 247.045L1150 525.859L814.021 634.924L1021.61 920.791L784.67 1093L576.918 807.133L369.33 1093L132.39 920.791L339.979 634.924L4 525.859L94.5125 247.045L430.491 356.274ZM577 111C593.016 111 606 98.0163 606 82C606 65.9837 593.016 53 577 53C560.984 53 548 65.9837 548 82C548 98.0163 560.984 111 577 111Z"
          fill="#001AFF"
        />
      </g>
      <g filter="url(#filter1_b_375_91)">
        <path
          d="M430.491 356.274L429.718 358.652L432.991 359.716V356.274H430.491ZM430.491 3V0.5H427.991V3H430.491ZM94.5125 247.045L95.2855 244.667L92.9069 243.894L92.1347 246.273L94.5125 247.045ZM4 525.859L1.62216 525.087L0.850223 527.465L3.2281 528.237L4 525.859ZM339.979 634.924L342.001 636.393L344.023 633.609L340.75 632.547L339.979 634.924ZM132.39 920.791L130.367 919.322L128.899 921.344L130.92 922.813L132.39 920.791ZM369.33 1093L367.86 1095.02L369.883 1096.49L371.352 1094.47L369.33 1093ZM576.918 807.133L578.94 805.664L576.917 802.88L574.895 805.664L576.918 807.133ZM784.67 1093L782.648 1094.47L784.118 1096.49L786.14 1095.02L784.67 1093ZM1021.61 920.791L1023.08 922.813L1025.1 921.344L1023.63 919.322L1021.61 920.791ZM814.021 634.924L813.25 632.547L809.977 633.609L811.999 636.393L814.021 634.924ZM1150 525.859L1150.77 528.237L1153.15 527.465L1152.38 525.087L1150 525.859ZM1059.49 247.045L1061.87 246.273L1061.09 243.894L1058.71 244.667L1059.49 247.045ZM723.509 356.274H721.009V359.716L724.282 358.652L723.509 356.274ZM723.509 3H726.009V0.5H723.509V3ZM432.991 356.274V3H427.991V356.274H432.991ZM93.7396 249.422L429.718 358.652L431.264 353.897L95.2855 244.667L93.7396 249.422ZM6.37784 526.631L96.8904 247.816L92.1347 246.273L1.62216 525.087L6.37784 526.631ZM340.75 632.547L4.7719 523.481L3.2281 528.237L339.207 637.302L340.75 632.547ZM134.413 922.26L342.001 636.393L337.956 633.455L130.367 919.322L134.413 922.26ZM370.799 1090.98L133.86 918.769L130.92 922.813L367.86 1095.02L370.799 1090.98ZM574.895 805.664L367.307 1091.53L371.352 1094.47L578.941 808.602L574.895 805.664ZM786.693 1091.53L578.94 805.664L574.896 808.603L782.648 1094.47L786.693 1091.53ZM1020.14 918.769L783.201 1090.98L786.14 1095.02L1023.08 922.813L1020.14 918.769ZM811.999 636.393L1019.59 922.26L1023.63 919.322L816.044 633.455L811.999 636.393ZM1149.23 523.481L813.25 632.547L814.793 637.302L1150.77 528.237L1149.23 523.481ZM1057.11 247.816L1147.62 526.631L1152.38 525.087L1061.87 246.273L1057.11 247.816ZM724.282 358.652L1060.26 249.422L1058.71 244.667L722.736 353.897L724.282 358.652ZM721.009 3V356.274H726.009V3H721.009ZM430.491 5.5H723.509V0.5H430.491V5.5ZM603.5 82C603.5 96.6355 591.636 108.5 577 108.5V113.5C594.397 113.5 608.5 99.397 608.5 82H603.5ZM577 55.5C591.636 55.5 603.5 67.3645 603.5 82H608.5C608.5 64.603 594.397 50.5 577 50.5V55.5ZM550.5 82C550.5 67.3645 562.364 55.5 577 55.5V50.5C559.603 50.5 545.5 64.603 545.5 82H550.5ZM577 108.5C562.364 108.5 550.5 96.6355 550.5 82H545.5C545.5 99.397 559.603 113.5 577 113.5V108.5Z"
          fill="#0011AC"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_375_91"
          x="-27.2"
          y="-28.2"
          width="1208.4"
          height="1152.4"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_375_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_375_91"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_375_91"
          x="-30.3494"
          y="-30.7"
          width="1214.7"
          height="1158.39"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_375_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_375_91"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>

  <!-- <div class="hidden w-full aspect-square dark:block items-center">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1154 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style="mix-blend-mode:multiply" filter="url(#filter0_b_375_92)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M430.491 356.274V3H723.509V356.274L1059.49 247.045L1150 525.859L814.021 634.924L1021.61 920.791L784.67 1093L576.918 807.133L369.33 1093L132.39 920.791L339.979 634.924L4 525.859L94.5125 247.045L430.491 356.274ZM577 111C593.016 111 606 98.0163 606 82C606 65.9837 593.016 53 577 53C560.984 53 548 65.9837 548 82C548 98.0163 560.984 111 577 111Z"
          fill="#001AFF"
        />
      </g>
      <g filter="url(#filter1_b_375_92)">
        <path
          d="M430.491 3V0.5H427.991V3H430.491ZM430.491 356.274L429.718 358.652L432.991 359.716V356.274H430.491ZM723.509 3H726.009V0.5H723.509V3ZM723.509 356.274H721.009V359.716L724.282 358.652L723.509 356.274ZM1059.49 247.045L1061.87 246.273L1061.09 243.894L1058.71 244.667L1059.49 247.045ZM1150 525.859L1150.77 528.237L1153.15 527.465L1152.38 525.087L1150 525.859ZM814.021 634.924L813.25 632.547L809.977 633.609L811.999 636.393L814.021 634.924ZM1021.61 920.791L1023.08 922.813L1025.1 921.344L1023.63 919.322L1021.61 920.791ZM784.67 1093L782.648 1094.47L784.118 1096.49L786.14 1095.02L784.67 1093ZM576.918 807.133L578.94 805.664L576.917 802.88L574.895 805.664L576.918 807.133ZM369.33 1093L367.86 1095.02L369.883 1096.49L371.352 1094.47L369.33 1093ZM132.39 920.791L130.367 919.322L128.899 921.344L130.92 922.813L132.39 920.791ZM339.979 634.924L342.001 636.393L344.023 633.609L340.75 632.547L339.979 634.924ZM4 525.859L1.62216 525.087L0.850223 527.465L3.2281 528.237L4 525.859ZM94.5125 247.045L95.2855 244.667L92.9069 243.894L92.1347 246.273L94.5125 247.045ZM427.991 3V356.274H432.991V3H427.991ZM723.509 0.5H430.491V5.5H723.509V0.5ZM726.009 356.274V3H721.009V356.274H726.009ZM1058.71 244.667L722.736 353.897L724.282 358.652L1060.26 249.422L1058.71 244.667ZM1152.38 525.087L1061.87 246.273L1057.11 247.816L1147.62 526.631L1152.38 525.087ZM814.793 637.302L1150.77 528.237L1149.23 523.481L813.25 632.547L814.793 637.302ZM1023.63 919.322L816.044 633.455L811.999 636.393L1019.59 922.26L1023.63 919.322ZM786.14 1095.02L1023.08 922.813L1020.14 918.769L783.201 1090.98L786.14 1095.02ZM574.896 808.603L782.648 1094.47L786.693 1091.53L578.94 805.664L574.896 808.603ZM371.352 1094.47L578.941 808.602L574.895 805.664L367.307 1091.53L371.352 1094.47ZM130.92 922.813L367.86 1095.02L370.799 1090.98L133.86 918.769L130.92 922.813ZM337.956 633.455L130.367 919.322L134.413 922.26L342.001 636.393L337.956 633.455ZM3.2281 528.237L339.207 637.302L340.75 632.547L4.7719 523.481L3.2281 528.237ZM92.1347 246.273L1.62216 525.087L6.37784 526.631L96.8904 247.816L92.1347 246.273ZM431.264 353.897L95.2855 244.667L93.7396 249.422L429.718 358.652L431.264 353.897ZM603.5 82C603.5 96.6355 591.636 108.5 577 108.5V113.5C594.397 113.5 608.5 99.397 608.5 82H603.5ZM577 55.5C591.636 55.5 603.5 67.3645 603.5 82H608.5C608.5 64.603 594.397 50.5 577 50.5V55.5ZM550.5 82C550.5 67.3645 562.364 55.5 577 55.5V50.5C559.603 50.5 545.5 64.603 545.5 82H550.5ZM577 108.5C562.364 108.5 550.5 96.6355 550.5 82H545.5C545.5 99.397 559.603 113.5 577 113.5V108.5Z"
          fill="#000D86"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_375_92"
          x="-27.2"
          y="-28.2"
          width="1208.4"
          height="1152.4"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_375_92"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_375_92"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_375_92"
          x="-30.3494"
          y="-30.7"
          width="1214.7"
          height="1158.39"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_375_92"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_375_92"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div> -->

  <div
    class="flex flex-col items-center gap-5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white sand-transition"
  >
    <div class="font-sand-medium text-6xl max-w-[35rem]">
      the prodigal child* will return
    </div>
    <div class="text-2xl max-w-[20rem]">
      art, design, refined garments and contemporary culture.
    </div>
  </div>

  <div class="absolute top-[17.5rem] right-24 pointer-events-auto">
    <ButtonClose on:close={() => removeShell("child")} />
  </div>
</div>
