"use client"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/ui/mode"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Page() {
    const [dat, setDat] = useState()
    const [load, setLoad] = useState("ładowanie")

    useEffect(() => {
        const getData = async () => {

            try {
                const datas = await fetch("https://api.kanye.rest/quotes")
                const jsonData = await datas.json()
                console.log(jsonData)
                setDat(jsonData)




            } catch (err) {
                console.log(err)
            } finally {

                setLoad("")
            }




        }
        getData()
    }, [])






    return (
        <div className="flex flex-wrap gap-5 bg-gray-900 justify-center">
            <div className="w-full justify-end flex pt-6 pr-6">            <ModeToggle className="right-2"></ModeToggle> <br/></div>
  


            {dat && dat.map((item, idx) => (


                <Card key={idx} className={"w-[200px] bg-gray-800 text-white"}>
                    <CardHeader>
                        <CardTitle>TOP KANYE QUOTES</CardTitle>
                        <CardDescription>number {idx+1}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       "{item}"
                    </CardContent>
                    <CardFooter>
                  
                    </CardFooter>
                </Card>



            ))}


        </div>
    )
}