import type { ReactNode } from 'react'

type RichTextProps = {
  text: string
  className?: string
}

export default function RichText({ text, className = '' }: RichTextProps) {
  const output: ReactNode[] = []
  let key = 0

  text.split(/\n\n+/).forEach((block) => {
    let paragraph: string[] = []
    let bullets: string[] = []

    const flushParagraph = () => {
      if (paragraph.length === 0) return
      const content = paragraph.join(' ')
      output.push(<p key={key++}>{content}</p>)
      paragraph = []
    }

    const flushBullets = () => {
      if (bullets.length === 0) return
      output.push(
        <ul key={key++} className="list-disc space-y-2 pl-6 marker:text-ink-muted">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>,
      )
      bullets = []
    }

    block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((line) => {
        if (line.startsWith('- ')) {
          flushParagraph()
          bullets.push(line.slice(2))
        } else {
          flushBullets()
          paragraph.push(line)
        }
      })

    flushParagraph()
    flushBullets()
  })

  return <div className={`space-y-4 text-body-md text-ink ${className}`}>{output}</div>
}
