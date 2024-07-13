export default function Blockquote({ text, author}) {
  return (
    <blockquote className="border-l-[5px] border-orange bg-black/[0.04] p-5">
      <p className="text-xl leading-tight md:text-2xl md:leading-tight">{text}</p>
      {author && (
        <cite className="not-italic mt-5 block text-sm">{author}</cite>
      )}
    </blockquote>
  )
}