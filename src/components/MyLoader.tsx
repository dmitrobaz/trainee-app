import React from "react"
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    rtl
    speed={2}
    width={220}
    height={335}
    viewBox="0 0 220 335"
    backgroundColor="#ffffff"
    foregroundColor="#ebebeb"
  >
    <rect x="5" y="5" rx="10" ry="10" width="210" height="315" />
  </ContentLoader>
)
export default MyLoader