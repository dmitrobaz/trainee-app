import React from "react"
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    rtl
    speed={2}
    width={234}
    height={195}
    viewBox="0 0 234 195"
    backgroundColor="#ffffff"
    foregroundColor="#ebebeb"
  >
    <rect style={{ borderRadius: "15px" }} x="0" y="0" rx="0" ry="0" width="195" height="234" />
  </ContentLoader>
)

export default MyLoader