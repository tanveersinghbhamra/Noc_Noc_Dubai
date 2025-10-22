"use client";
export default function MenuAbout() {
    return (
    <section className="bg-[#0d0a0a] dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="/nocnocImages/food&drinks.jpeg" alt="menuAboutImage" loading="lazy" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="font-alice text-5xl font-bold leading-none sm:text-6xl text-[#C29C7D]">Gourmet bites, perfect sips
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-amber-50">From global bites to gourmet platters, our menu is designed to complement every mood.
                    <br  className="hidden md:inline lg:hidden" />Pair your meal with handcrafted cocktails, fine wines, or premium spirits curated by our in house mixologists.
                </p>
            </div>
        </div>
    </section>
    );
}
