export default function Blockquote({ text, author}) {
  return (
    <blockquote className="border-l-[5px] border-orange bg-black/[0.04] p-5">
      <p className="text-xl leading-tight md:text-2xl md:leading-tight">{text} This is a really long boy that i like it's quite nice and a very good quote a lovely one infact</p>
      {author && (
        <cite className="not-italic mt-5 block text-sm">{author}</cite>
      )}
    </blockquote>
  )
}