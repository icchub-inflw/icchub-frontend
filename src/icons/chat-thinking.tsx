export const ChatThinking = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="36" viewBox="0 0 24 24">
    <circle cx="4" cy="12" r="3" fill="#484848">
      <animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;0.2" />
    </circle>
    <circle cx="12" cy="12" r="3" fill="#484848" opacity="0.4">
      <animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;0.2" />
    </circle>
    <circle cx="20" cy="12" r="3" fill="#484848" opacity="0.3">
      <animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;0.2" />
    </circle>
  </svg>
)