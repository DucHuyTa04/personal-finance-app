import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* Grid column 1 */}
            <div className="h-full lg:flex flex-col items-center justify-center px4">

                {/* Text div */}
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">
                        Welcome back!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Log in or Create an account to continue
                    </p>
                </div>

                {/* Log in / Sign up div */}
                <div className="flex items-center justify-center mt-8">
                    <ClerkLoaded>
                        <SignIn path="/sign-in" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>

            {/* Grid column 2, hidden on mobile */}
            <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
                <Image src = "/logo.svg" height={100} width={100} alt="Logo"/>
            </div>
        </div>
    );
}