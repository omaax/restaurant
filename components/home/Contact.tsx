import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../../components/ui/button"

const Contact = () => {
  return (
    <div className="relative">
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl sm:text-6xl mb-10 text-center">Contact Us</h1>
            {/* <form action="submit" className="flex itmes-center justify-center">
                <label className="font-sans" htmlFor="email">Email</label>
                <input className="bg-white border-gray-400 border rounded-4xl p-2.5 ml-8 w-75" type="text" id="email"/>
                <label className="font-sans" htmlFor="name">Name</label>
                <input className="bg-white border-gray-400 border rounded-4xl p-2.5 ml-8 w-75" type="text" id="name"/>
            </form> */}
                <FieldGroup className="grid grid-cols-1 sm:grid-cols-2">
                    <Field>
                        <FieldLabel className="text-md" htmlFor="email">Email</FieldLabel>
                        <Input className="bg-white rounded-4xl border border-gray-400 w-full px-30 py-5.5" id="email" />
                    </Field>
                    <Field>
                        <FieldLabel className="text-md" htmlFor="name">Name</FieldLabel>
                        <Input className="bg-white rounded-4xl border border-gray-400 w-full px-30 py-5.5" id="name" />
                    </Field>
                        {/* <button className='bg-black hover:bg-[#161616] text-white rounded-full font-bold h-[50] w-[600] my-10 cursor-pointer'>SUBMIT</button> */}
                    <Field className="" orientation="responsive">
                        <Button className="uppercase mt-4 py-6 sm:px-75 px-30 font-bold font-sans tracking-widest text-md rounded-full" type="submit">Submit</Button>
                    </Field>
                </FieldGroup>
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 gap-8">
                <div className="place-items-center">
                    <h1 className="uppercase font-bold text-2xl">F​ind Us</h1>
                    <p className="mt-5 font-sans text-gray-700 text-lg sm:w-50 w-80 text-center">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
                <div className="place-items-center">
                    <h1 className="uppercase font-bold text-2xl">Hours</h1>
                    <h2 className="mt-5 font-sans font-bold text-lg">Monday – Saturday</h2>
                    <p className="font-sans text-lg text-gray-700">9am – 7pm</p>
                    <h2 className="font-sans font-bold text-lg">Sunday</h2>
                    <p className="font-sans text-lg text-gray-700">10am – 6pm</p>
                </div>
                <div className="place-items-center">
                    <h1 className="uppercase font-bold text-2xl">Call Us</h1>
                    <h1 className="font-bold text-xl my-5 underline underline-offset-4 decoration-1 decoration-yellow-600 hover:decoration-black cursor-pointer">1 (234) 567-891</h1>
                    <h1 className="font-bold text-xl underline underline-offset-4 decoration-1 decoration-yellow-600 hover:decoration-black cursor-pointer">2 (354) 567-891</h1>
                </div>
            </div>
        </div>
        <div className='bg-[url(/S7.jpg)] sm:h-[840px] h-[1000px] bg-no-repeat bg-cover bg-center brightness-90' />
    </div>
  )
}

export default Contact