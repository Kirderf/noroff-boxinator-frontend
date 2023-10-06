import CustomDialog from "@/components/customComponents/dialog/CustomDialog"
import { CustomTable } from "@/components/customComponents/table/CustomTable"


function ProfilePage() {
    return (
        <main className='flex flex-col justify-center items-center pt-20 text-background-color bg-primary-color min-h-screen'>
            <div className="min-w-[10rem] flex flex-col items-center justify-center">
                <img className='rounded-full' src="./images/freddy.png" alt="" />
                <h1 className='mt-10 font-bold text-2xl'>Freddy Freddison</h1>
                <CustomDialog />
            </div>
            <CustomTable />
        </main>
    )
}

export default ProfilePage