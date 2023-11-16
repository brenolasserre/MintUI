export default function Bento(){
  return (
  <>
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-2/3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl text-neutral-300 border border-zinc-800 p-4 bg-zinc-950 ${
              i === 1 || i === 2 ? "col-span-2" : ""
            }`}
          >
          </div>
        ))}
    </div>
  </>
  )
}
