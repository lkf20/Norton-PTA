"use client"

import { ReactNode, useMemo } from "react"

type EmailLinkProps = {
  user: string
  domain: string
  subject?: string
  body?: string
  children?: ReactNode
  className?: string
  variant?: "link" | "button"
}

export default function EmailLink({
  user,
  domain,
  subject,
  body,
  children,
  className,
  variant = "link",
}: EmailLinkProps) {
  const email = useMemo(() => `${user}@${domain}`, [user, domain])

  const mailto = useMemo(() => {
    const params = new URLSearchParams()
    if (subject) params.set("subject", subject)
    if (body) params.set("body", body)
    const query = params.toString()
    return `mailto:${email}${query ? `?${query}` : ""}`
  }, [email, subject, body])

  const displayText =
    typeof children === "string" || children ? (
      children
    ) : (
      <>
        {user}
        <span className="sr-only">@</span>
        {"\u200B@\u200B"}
        {domain}
      </>
    )

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    window.location.href = mailto
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      window.location.href = mailto
    }
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={className}
      >
        {displayText}
      </button>
    )
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      data-user={user}
      data-domain={domain}
    >
      {displayText}
    </a>
  )
}

