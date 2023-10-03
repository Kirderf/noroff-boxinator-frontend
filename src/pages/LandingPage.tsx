import CardList from "@/components/customComponents/customCard/CardList"
import TopSellingCardList from "@/components/customComponents/customCard/TopSellingCardList"
import Footer from "@/components/customComponents/footer/Footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"




function LandingPage() {
    return (
        <main className="flex flex-col">
            <div className='min-h-screen  w-full flex flex-col items-center justify-center bg-primary-color'>
                <div className='flex gap-32 bg-primary-color flex-wrap items-center justify-center pb-20 md:pr-32'>
                    <img src="./images/BoxinatorLogo.png" className='object-fit h-[35rem] w-[35rem]' alt="" />
                    <div className='flex flex-col items-center justify-center max-w-[20rem] text-center gap-10'>
                        <h2>
                            <span className='text-green-color text-[2rem] font-bold'>Explore </span>
                            <span className='text-white text-[1.3rem] font-bold italic'>
                                a world of imaginative possibilities one box at a time, crafted to inspire and delight.
                            </span>
                        </h2>
                        <Button className="bg-accent-color-1 w-[80%]">
                            <h1>Get started</h1>
                        </Button>
                    </div>
                </div>
            </div>

            <div className=" h-auto w-[90%] mx-auto my-20 bg-primary-color rounded-lg">
                <h1 className="text-center pt-10 text-[2rem] font-bold"><span className="text-green-color">Top</span> Selling Products!</h1>
                <TopSellingCardList />
                <Separator className="my-10 bg-background-color" />
                <h1 className="text-center pt-10 text-[2rem] font-bold"><span className="text-green-color">Other</span> great Products to look at!</h1>
                <CardList />
            </div>


            <Footer />
        </main>

    )
}

export default LandingPage