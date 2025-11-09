"use client"

const FACEBOOK_PAGE_URL = "https://www.facebook.com/NortonElementary"

type FacebookFeedProps = {
  height?: number
}

export default function FacebookFeed({ height = 620 }: FacebookFeedProps) {
  const width = 500
  const pluginSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    FACEBOOK_PAGE_URL,
  )}&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true`

  return (
    <div className="w-full">
      <iframe
        title="Norton Elementary Facebook feed"
        src={pluginSrc}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  )
}
