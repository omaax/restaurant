"use client"
function Footer() {
  return (
    <div className='h-[300px] bg-custom-black text-white flex flex-col gap-20 items-center justify-center'>
      <p>Sample text. Click to select the Text Element.</p>
      <p className="text-sm">
        This site was created with the <span className="text-yellow-600 underline cursor-pointer hover:-underline-offset-2">Omar</span>
      </p>
    </div>
  )
}

export default Footer
